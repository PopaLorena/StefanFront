import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeGet } from 'src/models/employeeGet';
import { EmployeeSave } from 'src/models/employeeSave';
import { EmployeeUpdate } from 'src/models/employeeUpdate';

@Component({
  selector: 'app-createform-employee',
  templateUrl: './createform-employee.component.html',
  styleUrls: ['./createform-employee.component.scss']
})
export class CreateformEmployeeComponent implements OnInit {
  errorText?: string;
  form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateformEmployeeComponent>,
    private formBuilder: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.errorText = "";

    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      userName: [null],
      password: [null],
      startDate: [null],
      fullName: [null],
      email: [null],
      phoneNumber: [null],
      role: [null]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private addItem(newItem: EmployeeSave): void {
    this.employeeService.saveEmployee(newItem).subscribe(() => {
      this.dialogRef.close();
    }, (err) => {
      this.errorText = err.error;
    });
  }

  saveNewItem(): void {
    const newItem: EmployeeSave = {
      ...this.form.getRawValue(),
    };
      this.addItem(newItem);
  }


}
