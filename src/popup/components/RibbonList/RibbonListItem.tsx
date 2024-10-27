import { Dispatch, SetStateAction } from 'react';
import {
  ArrowDownward,
  ArrowUpward,
  Delete,
  DoNotDisturb,
  Save,
} from '@mui/icons-material';
import { Button, ButtonGroup, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { updateObjectInArray } from '../../utils/array';
import { STORAGE_KEY_RIBBONS } from '../../utils/storage';
import { Ribbon, Ribbons } from '../../utils/types';
import { FlexColumn, FlexRow } from '../Display';

import { RibbonFormData } from './RibbonList';

const moveItemInOrder = (
  items: Ribbons,
  id: string,
  direction: 'up' | 'down',
): Ribbons => {
  // Clone and sort items by current order to avoid side effects
  const sortedItems = [...items].sort((a, b) => a.order - b.order);

  // Find the current index of the item to move
  const currentIndex = sortedItems.findIndex((item) => item.id === id);
  if (currentIndex === -1) return items; // Return original array if item is not found

  // Calculate the new index based on the direction
  const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

  // Ensure the new index is within array bounds
  if (newIndex < 0 || newIndex >= sortedItems.length) return items;

  // Swap items in the sorted array
  [sortedItems[currentIndex], sortedItems[newIndex]] = [
    sortedItems[newIndex],
    sortedItems[currentIndex],
  ];

  // Reassign order properties to ensure they are sequential
  return sortedItems.map((item, index) => ({ ...item, order: index }));
};

interface Props {
  setRibbons: Dispatch<SetStateAction<Ribbons>>;
  ribbon: Ribbon;
  ribbons: Ribbons;
}

export const RibbonListItem = ({ ribbon, setRibbons, ribbons }: Props) => {
  const defaultValues = { title: ribbon.title };
  const { register, handleSubmit, reset, watch } = useForm<RibbonFormData>({
    defaultValues,
  });
  const titleLiveValue = watch('title');

  const onSubmit = async (data: RibbonFormData) => {
    if (!data.title) {
      toast.error(`You must enter a value.`);
      return;
    }

    try {
      const newRibbon = { ...ribbon, title: data.title };
      const updatedRibbons = updateObjectInArray(
        ribbons,
        newRibbon,
        (ribbonFromArray) => ribbonFromArray.id === ribbon.id,
      );

      await chrome.storage.sync.set({ [STORAGE_KEY_RIBBONS]: updatedRibbons });
      setRibbons(updatedRibbons);
    } catch (error) {
      console.error('error', error);
    }
  };

  const onDelete = async () => {
    const newItems = ribbons.filter(
      (ribbonFromExisting) => ribbonFromExisting.id !== ribbon.id,
    );

    await chrome.storage.sync.set({ [STORAGE_KEY_RIBBONS]: newItems });
    setRibbons(newItems);
  };

  const onCancel = () => {
    reset(defaultValues);
  };

  const onTieToggle = async () => {
    try {
      const newRibbon = { ...ribbon, isTied: !ribbon.isTied };
      const updatedRibbons = updateObjectInArray(
        ribbons,
        newRibbon,
        (ribbonFromArray) => ribbonFromArray.id === ribbon.id,
      );

      await chrome.storage.sync.set({ [STORAGE_KEY_RIBBONS]: updatedRibbons });
      setRibbons(updatedRibbons);
    } catch (error) {
      console.error('error', error);
    }
  };

  const onSortUp = async () => {
    try {
      const updatedRibbons = moveItemInOrder(ribbons, ribbon.id, 'up');

      await chrome.storage.sync.set({ [STORAGE_KEY_RIBBONS]: updatedRibbons });
      setRibbons(updatedRibbons);
    } catch (error) {
      console.error('error', error);
    }
  };

  const onSortDown = async () => {
    try {
      const updatedRibbons = moveItemInOrder(ribbons, ribbon.id, 'down');

      await chrome.storage.sync.set({ [STORAGE_KEY_RIBBONS]: updatedRibbons });
      setRibbons(updatedRibbons);
    } catch (error) {
      console.error('error', error);
    }
  };

  const areSaveButtonsDisabled =
    !titleLiveValue || titleLiveValue === ribbon.title;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FlexColumn gap={4}>
        <FlexRow alignItems="center" gap={4}>
          <TextField
            {...register('title')}
            fullWidth
            label="Task"
            multiline
            placeholder="Send Andy that email before noon."
            value={titleLiveValue}
          />
          <Button
            color={ribbon.isTied ? 'primary' : 'primary'}
            onClick={onTieToggle}
            startIcon={ribbon.isTied ? <>🎗️</> : null}
            type="button"
            variant={ribbon.isTied ? 'contained' : 'outlined'}
          >
            {ribbon.isTied ? 'Untie' : 'Tie'}
          </Button>
        </FlexRow>
        <ButtonGroup
          size="small"
          sx={{
            '& .MuiButtonGroup-grouped': {
              minWidth: 22,
            },
          }}
        >
          <Button
            color="success"
            disabled={areSaveButtonsDisabled}
            fullWidth
            size="small"
            startIcon={<Save />}
            type="submit"
            variant="outlined"
          >
            Save
          </Button>
          <Button
            color="secondary"
            disabled={areSaveButtonsDisabled}
            fullWidth
            onClick={onCancel}
            size="small"
            startIcon={<DoNotDisturb />}
            type="button"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            color="error"
            fullWidth
            onClick={onDelete}
            size="small"
            startIcon={<Delete />}
            type="button"
            variant="outlined"
          >
            Delete
          </Button>
          <Button
            disabled={ribbon.order === 0}
            fullWidth
            onClick={onSortUp}
            size="small"
            sx={{ maxWidth: '30px', minWidth: '30px', padding: 0 }}
            type="button"
            variant="outlined"
          >
            <ArrowUpward fontSize="small" />
          </Button>
          <Button
            disabled={ribbon.order === ribbons.length - 1}
            fullWidth
            onClick={onSortDown}
            size="small"
            sx={{ maxWidth: '30px', minWidth: '30px', padding: 0 }}
            type="button"
            variant="outlined"
          >
            <ArrowDownward fontSize="small" />
          </Button>
        </ButtonGroup>
      </FlexColumn>
    </form>
  );
};
