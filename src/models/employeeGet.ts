export class EmployeeGet{
    constructor(
        public employeeId?: number,
        public userName?: string,
        public startDate?: Date,
        public fullName?: string,
        public endDate?: Date,
        public phoneNumber?: string,
        public email?: string,
        public workingHours?: number,
        public role?: string
    ){}
}