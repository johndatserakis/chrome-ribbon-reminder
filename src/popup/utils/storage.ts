import { get } from './chrome';
import { Ribbons } from './types';

export const STORAGE_KEY_RIBBONS = 'ribbons';
export const DEFAULT_RIBBONS: Ribbons = [
  // {
  //   createdAt: new Date(),
  //   id: '123',
  //   isTied: false,
  //   order: 0,
  //   title: '213423423',
  //   updatedAt: new Date(),
  // },
  // {
  //   createdAt: new Date(),
  //   id: '1234',
  //   isTied: false,
  //   order: 0,
  //   title:
  //     '213423423 213423423 213423423 213423423 213423423 213423423 213423423 213423423 213423423 213423423',
  //   updatedAt: new Date(),
  // },
];

export const getRibbons = async () =>
  await get<Ribbons>(STORAGE_KEY_RIBBONS, DEFAULT_RIBBONS);
