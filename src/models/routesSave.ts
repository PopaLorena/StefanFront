export class RoutesSave{
    constructor(
        public routeId?: number,
        public routeDetails?: string,
        public executionTime?: Date,
        public employeeId?: number,
        public carId?: number,
        public routeDeparture?: string,
        public routeDestination?: string
    ){}
}