export class RepairsGet{
    constructor(
        public repairsId?: number,
        public date?: Date,
        public place?: string,
        public employeeResponsibleId?: number,
        public carToBeRepairedId?: number,
        public problem?: string,
        public repairDuration?: number,
        public repairCost?: number
    ){}
}