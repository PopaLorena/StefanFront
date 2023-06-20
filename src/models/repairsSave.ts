export class RepairsSave{
    constructor(
        public date?: Date,
        public place?: string,
        public carToBeRepairedId?: number,
        public employeeResponsibleId?: number,
        public problem?: string,
        public repairDuration?: number,
        public repairCost?: number
    ){}
}