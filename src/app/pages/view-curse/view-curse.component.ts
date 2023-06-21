import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RoutesService } from 'src/app/services/routes.service';
import { RoutesGet } from 'src/models/routesGet';

@Component({
  selector: 'app-view-curse',
  templateUrl: './view-curse.component.html',
  styleUrls: ['./view-curse.component.scss']
})
export class ViewCurseComponent implements AfterViewInit, OnInit{
  displayedColumns: string[] = ['routeDetails', 'executionTime', 'collectedMoney', 'spentMoney', 'kmNumber', 'employeeId', 'carId', 'routeDeparture', 'routeDestination'];
  dataSource!: MatTableDataSource<RoutesGet>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  routes!: RoutesGet[];

  constructor(private routesService: RoutesService){

  }
  async ngOnInit(): Promise<void>{
    await this.getRoutesList();
    this.dataSource = new MatTableDataSource(this.routes);
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

  async getRoutesList(): Promise<void> {
    (await this.routesService.getRoutes()).subscribe((list: RoutesGet[]) => {
     this.routes = list;
     this.updateTable();
     console.log(list);
   }, (err) => {
     if (err.status === 401)
       return;
   });
 }

 updateTable(): void {
  this.dataSource = new MatTableDataSource<RoutesGet>(this.routes);
}

}
