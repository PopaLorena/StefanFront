export class CustomerGet{
    constructor(
        public customerId?: number,
        public customerName?: string,
        public customerRouteId?: number,
        public customerPhoneNumber?: string,
        public customerEmail?: string
    ){}
}