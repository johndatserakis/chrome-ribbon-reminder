export interface Ribbon {
  createdAt: Date;
  id: string;
  isTied: boolean;
  order: number;
  title: string;
  updatedAt: Date;
}

export type Ribbons = Ribbon[];
