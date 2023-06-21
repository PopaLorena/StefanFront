import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CarsService } from 'src/app/services/cars.service';
import { CarsGet } from 'src/models/carsGet';

@Component({
  selector: 'app-view-cars',
  templateUrl: './view-cars.component.html',
  styleUrls: ['./view-cars.component.scss']
})
export class ViewCarsComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['manufacturingDate', 'carType', 'seatsNumber', 'numberPlate', 'kmNumber', 'carHistory'];
  dataSource!: MatTableDataSource<CarsGet>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  cars!: CarsGet[];

  constructor(private carsService: CarsService ){

  }
  async ngOnInit(): Promise<void>{
    await this.getCarsList();
    this.dataSource = new MatTableDataSource(this.cars);
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  async getCarsList(): Promise<void>{
    (await this.carsService.getCars()).subscribe((list: CarsGet[]) => {
      this.cars = list;
      this.updateTable();
      console.log(list);
    }, (err)=>{
      if(err.status === 401)
      return;
    });
  }

  updateTable(): void{
    this.dataSource = new MatTableDataSource<CarsGet>(this.cars);
  }
}
