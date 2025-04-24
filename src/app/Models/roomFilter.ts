export interface RoomFilter {
  roomTypeId: number;
  priceFrom: number;
  priceTo: number;
  maximumGuests: number;
  checkIn?: string;
  checkOut?: string;
  dateRange?: { start: Date | null, end: Date | null } | null;
}