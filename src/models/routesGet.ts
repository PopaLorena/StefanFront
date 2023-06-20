export class RoutesGet{
    constructor(
        public routeId?: number,
        public routeDetails?: string,
        public executionTime?: Date,
        public collectedMoney?: string,
        public spentMoney?: string,
        public kmNumber?: number,
        public employeeId?: number,
        public carId?: number,
        public routeDeparture?: string,
        public routeDestination?: string
    ){}
}