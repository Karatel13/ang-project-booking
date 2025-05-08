export class Rooms {
    id?: number;
    name!: string;
    hotelId?: number;
    pricePerNight?: number;
    available!: boolean;
    maximumGuests?: number;
    roomTypeId?: number;
    bookedDates?: BookedDates[];
    images?:Images[];
  }
export class RoomType {
  id?: number;
  name!: string;
}
export class Images {
    id!: number;
    source!: string;
    roomId!: number;
}
export class  BookedDates {
    id!: number;
    date!: string;
    roomId!: number;
}