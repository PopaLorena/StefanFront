import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RepairsService} from 'src/app/services/repairs.service';
import { RepairsGet } from 'src/models/repairsGet';

@Component({
  selector: 'app-view-repair',
  templateUrl: './view-repair.component.html',
  styleUrls: ['./view-repair.component.scss']
})
export class ViewRepairComponent implements AfterViewInit, OnInit{
  displayedColumns: string[] = ['date', 'place', 'employeeResponsibleId', 'carToBeRepairedId', 'problem', 'repairDuration', 'repairCost'];
  dataSource!: MatTableDataSource<RepairsGet>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  repairs!: RepairsGet[];

  constructor(private repairsService: RepairsService){

  }

  async ngOnInit(): Promise<void>{
    await this.getRepairsList();
    this.dataSource = new MatTableDataSource(this.repairs);
  }

  ngAfterViewInit(){
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

  async getRepairsList(): Promise<void> {
    (await this.repairsService.getRepairs()).subscribe((list: RepairsGet[]) => {
     this.repairs = list;
     this.updateTable();
     console.log(list);
   }, (err) => {
     if (err.status === 401)
       return;
   });
 }

 updateTable(): void {
  this.dataSource = new MatTableDataSource<RepairsGet>(this.repairs);
}

}
