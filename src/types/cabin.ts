export type Cabin = {
  id?: number;
  created_at?: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description?: string;
  image: any;
};

export type CabinData = Omit<Cabin, 'id' | 'created_at'>;
