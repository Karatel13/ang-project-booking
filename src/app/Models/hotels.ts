export interface Hotels {
    id: number;
    name: string;
    address: string;
    city: string;
    featuredImage: string;
    rooms: Room[];
  }
  
  export interface Room {
    id: number;
    name: string;
    hotelId: number;
    roomTypeId: number;
    pricePerNight: number;
    available: boolean;
    maximumGuests: number;
    bookedDates: any;
    images: Image[];
  }
  
  export interface Image {
    id: number;
    source: string;
    roomId: number;
  }
  