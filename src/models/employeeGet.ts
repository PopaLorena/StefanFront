export class EmployeeGet{
    constructor(
        public employeeId?: number,
        public username?: string,
        public startDate?: Date,
        public fullName?: string,
        public endDate?: Date,
        public phoneNumber?: string,
        public email?: string,
        public workingHours?: number,
        public role?: string
    ){}
}