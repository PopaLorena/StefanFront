export class RoutesUpdate{
    constructor(
        public routeDetails?: string,
        public routePeriod?: Date,
        public executionTime?: Date,
        public collectedMoney?: string,
        public spentMoney?: string,
        public kmNumber?: number,
        public passengersNumber?: number
    ){}
}