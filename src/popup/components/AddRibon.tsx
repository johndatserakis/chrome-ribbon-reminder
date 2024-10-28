import { Dispatch, SetStateAction } from 'react';
import { Add } from '@mui/icons-material';
import {
  Button,
  Card,
  CardContent,
  Chip,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

import { STORAGE_KEY_RIBBONS } from '../utils/storage';
import { Ribbon, Ribbons } from '../utils/types';

import { ContentContainer, FlexColumn, FlexRow } from './Display';

const MAX_RIBBON_ITEMS = 30;

export interface RibbonFormData {
  title: string;
}

interface Props {
  setRibbons: Dispatch<SetStateAction<Ribbons>>;
  ribbons: Ribbons;
}

export const AddRibbon = ({ setRibbons, ribbons }: Props) => {
  const { register, handleSubmit, reset, watch } = useForm<RibbonFormData>();
  const titleValue = watch('title');
  const storageKey = STORAGE_KEY_RIBBONS;

  const onSubmit = async (data: RibbonFormData) => {
    if (!data.title) {
      toast.error(`You must enter a value.`);
      return;
    }

    if (ribbons.length >= MAX_RIBBON_ITEMS) {
      toast.error(`Maximum of ${MAX_RIBBON_ITEMS} URLs reached.`);
      return;
    }

    try {
      const now = new Date();
      const newRibbon: Ribbon = {
        createdAt: now,
        id: uuidv4(),
        isTied: false,
        order: ribbons.length, // Ordering is 0 based.
        title: data.title,
        updatedAt: now,
      };
      const newItems = [newRibbon, ...ribbons];

      await chrome.storage.sync.set({ [storageKey]: newItems });
      setRibbons(newItems);
      reset();
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <ContentContainer>
      <Card variant="outlined">
        <CardContent>
          <FlexColumn gap={3}>
            <FlexRow alignItems="center" justifyContent="space-between">
              <Typography>
                Ribbons
                {ribbons.length > 0 ? (
                  <Chip
                    color="secondary"
                    component="span"
                    label={ribbons.length}
                    size="small"
                    sx={{ ml: 2, mb: 1 }}
                    variant="outlined"
                  />
                ) : null}
              </Typography>
            </FlexRow>
            <FlexColumn gap={4}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  {...register('title')}
                  fullWidth
                  label="Task"
                  multiline
                  placeholder="Send Andy that email before noon."
                  slotProps={{
                    input: {
                      endAdornment: (
                        <Button
                          disabled={!titleValue}
                          size="small"
                          startIcon={<Add />}
                          type="submit"
                        >
                          Add
                        </Button>
                      ),
                    },
                  }}
                />
              </form>
            </FlexColumn>
          </FlexColumn>
        </CardContent>
      </Card>
    </ContentContainer>
  );
};
