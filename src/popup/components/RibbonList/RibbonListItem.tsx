import { Dispatch, SetStateAction } from 'react';
import { Delete, DoNotDisturb, Save } from '@mui/icons-material';
import { Button, ButtonGroup, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { STORAGE_KEY_RIBBONS } from '../../utils/storage';
import { Ribbon, Ribbons } from '../../utils/types';
import { FlexColumn } from '../Display';

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
  const storageKey = STORAGE_KEY_RIBBONS;

  const onSubmit = async (data: RibbonFormData) => {
    if (!data.title) {
      toast.error(`You must enter a value.`);
      return;
    }

    try {
      const matchedRibbon = ribbons.findIndex(
        (ribbonFromExisting) => ribbonFromExisting.id === ribbon.id,
      );

      if (matchedRibbon === -1) {
        toast.error(
          'There was an error updating the ribbon. Pleast try again.',
        );
        return;
      }

      const clonedRibbons = [...ribbons];

      clonedRibbons.splice(matchedRibbon, 1, ribbon);

      await chrome.storage.sync.set({ [storageKey]: clonedRibbons });

      setRibbons(clonedRibbons);
      toast.success(`Ribbon updated.`, { duration: 1000 });
    } catch (error) {
      console.log('error', error);
    }
  };

  const onDelete = async () => {
    const newItems = ribbons.filter(
      (ribbonFromExisting) => ribbonFromExisting.id !== ribbon.id,
    );

    await chrome.storage.sync.set({ [storageKey]: newItems });

    setRibbons(newItems);
  };

  const onCancel = () => {
    reset(defaultValues);
  };

  const isDisabled = !titleLiveValue || titleLiveValue === ribbon.title;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FlexColumn gap={2}>
        <TextField
          {...register('title')}
          fullWidth
          label="Task or thought..."
          multiline
          placeholder="Send Andy that email before noon."
          value={titleLiveValue}
        />
        <ButtonGroup>
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
