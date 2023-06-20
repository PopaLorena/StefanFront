import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeGet } from 'src/models/employeeGet';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<EmployeeGet>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  employees!: EmployeeGet[];

  constructor(private employeeService: EmployeeService) {
    // Create 100 users
    this.getEmployeesList();

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.employees);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getEmployeesList(): void {
    this.employeeService.getEmployee().subscribe((list: EmployeeGet[]) => {
      this.employees = list;
    }, (err) => {
      if (err.status === 401)
        return;
    });
  }
}
