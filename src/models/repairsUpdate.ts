export class RepairsUpdate{
    constructor(
        public problem?: string,
        public repairDuration?: number,
        public repairCost?: number
    ){}
}