import { Cabin } from './cabin';
import { Guest } from './guest';

export type Booking = {
  id: number;
  cabinId: number;
  guestId: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  cabinPrice: number;
  extrasPrice: number;
  totalPrice: number;
  status: string;
  hasBreakfast: boolean;
  isPaid: boolean;
  observations: string;
  cabins: Cabin;
  guests: Guest;
};
