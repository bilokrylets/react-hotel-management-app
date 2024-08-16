export type Setting = {
  id: number;
  created_at: string;
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
};

export type SettingData = Omit<Cabin, 'id' | 'created_at'>;
