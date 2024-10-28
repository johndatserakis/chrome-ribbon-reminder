import { get } from './chrome';
import { Ribbons } from './types';

/**
 * Fresh key due to large update. John: 2024-10-27.
 */
export const STORAGE_KEY_RIBBONS = 'ribbons-v2';
export const DEFAULT_RIBBONS: Ribbons = [];

export const getRibbons = async () =>
  await get<Ribbons>(STORAGE_KEY_RIBBONS, DEFAULT_RIBBONS);
