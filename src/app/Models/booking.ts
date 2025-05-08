export interface Booking {
    roomID: number;
    checkInDate: Date;
    checkOutDate: Date;
    totalPrice: number;
    isConfirmed: boolean;
    customerName: string;
    customerId: string;
    customerPhone: string;
}
export interface Cancelbooking {
    id: number;
    roomID: number;
    checkInDate: Date;
    checkOutDate: Date;
    totalPrice: number;
    isConfirmed: boolean;
    customerName: string;
    customerId: string;
    customerPhone: string;
}