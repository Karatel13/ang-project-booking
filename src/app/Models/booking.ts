export class Booking {
    id!: number;
    roomID!: number;
    checkInDate?: string;
    checkOutDate?: string;
    totalPrice!: number;
    isConfirmed?: boolean;
    customerName?: string;
    customerId?: string;
    customerPhone?: string;
}