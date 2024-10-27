import { Dispatch, SetStateAction } from 'react';
import { Bookmark, Delete, DoNotDisturb, Save } from '@mui/icons-material';
import { Button, ButtonGroup, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { updateObjectInArray } from '../../utils/array';
import { STORAGE_KEY_RIBBONS } from '../../utils/storage';
import { Ribbon, Ribbons } from '../../utils/types';
import { FlexColumn, FlexRow } from '../Display';

import { RibbonFormData } from './RibbonList';

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

  const isDisabled = !titleLiveValue || titleLiveValue === ribbon.title;

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
        <ButtonGroup size="small">
          <Button
            color="success"
            disabled={isDisabled}
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
            disabled={isDisabled}
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
        </ButtonGroup>
      </FlexColumn>
    </form>
  );
};
