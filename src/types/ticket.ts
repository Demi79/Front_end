export type Ticket = {
    eventId: string;
    price: number;
    paymentMethod: string;
    totalAmount: string;
    successCallbackUrl: string;
    failureCallbackUrl: string;
};

export type TicketHistory = {
    ticket_id: string;
    total_amount: number;
    event_name: string;
    event_id: string;
    purchase_date: string;
    status: string;
    otp_code: string | null;
    qr_code: string | null;
};