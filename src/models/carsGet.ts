export class CarsGet{
    constructor(
        public carId?: number,
        public manufacturingDate?: Date,
        public carType?: string,
        public seatsNumber?: number,
        public numberPlate?: string,
        public kmNumber?: number,
        public carHistory?: string
    ){}
}