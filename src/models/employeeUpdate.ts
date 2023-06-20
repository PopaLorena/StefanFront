export class EmployeeUpdate{
    constructor(
        public userName?: string,
        public password?: string,
        public phoneNumber?: string,
        public email?: string,
        public workedDaysPerMonth?: number,
        public endDate?: Date
    ){}
}