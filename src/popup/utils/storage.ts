import { get } from './chrome';
import { Ribbons } from './types';

export const STORAGE_KEY_RIBBONS = 'ribbons';
export const DEFAULT_RIBBONS: Ribbons = [];

export const getRibbons = async () =>
  await get<Ribbons>(STORAGE_KEY_RIBBONS, DEFAULT_RIBBONS);
