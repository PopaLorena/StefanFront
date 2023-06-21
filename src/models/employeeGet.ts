export class EmployeeGet{
    constructor(
        public employeeId?: number,
        public username?: string,
        public startDate?: Date,
        public fullName?: string,
        public endDate?: Date,
        public phoneNumber?: string,
        public email?: string,
        public workedDaysPerMonth?: number,
        public role?: string
    ){}
}