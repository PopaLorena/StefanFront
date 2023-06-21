import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeGet } from 'src/models/employeeGet';
import { EmployeeUpdate } from 'src/models/employeeUpdate';

export interface DialogData {
  idToBeEdit: number ;
}

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {
  private employeeToEdit: EmployeeUpdate | undefined = new EmployeeUpdate();
  errorText?: string;
  form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<FormEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.errorText = "";

    if (this.data.idToBeEdit != 0)
      this.setEditItem(this.data.idToBeEdit!);
    this.createForm();
  }

  private setEditItem(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe(
      (employeeGet: EmployeeGet) => {
        this.employeeToEdit!.email = employeeGet!.email;
        this.employeeToEdit!.endDate = employeeGet!.endDate;
        this.employeeToEdit!.phoneNumber = employeeGet!.phoneNumber;
        this.employeeToEdit!.workedDaysPerMonth = employeeGet!.workedDaysPerMonth;
        this.form.patchValue(this.employeeToEdit!, {
          emitEvent: false
        });
      });
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      email: [null],
      endDate: [null],
      phoneNumber: [null],
      workedDaysPerMonth: [null]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private updateItem(newItem: EmployeeUpdate): void {
    this.employeeService.updateEmployee(this.data.idToBeEdit,newItem).subscribe(() => {
      this.dialogRef.close();
    }, (err) => {
      this.errorText = err.error;
    });
  }

  saveNewItem(): void {
    const newItem: EmployeeUpdate = {
      ...this.employeeToEdit,
      ...this.form.getRawValue(),
    };
      this.updateItem(newItem);
  }

}
