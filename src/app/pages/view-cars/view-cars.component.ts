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
  datasource!: MatTableDataSource<CarsGet>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  cars!: CarsGet[];

  constructor(private carsService: CarsService ){

  }
  async ngOnInit(): Promise<void>{
    await this.getCarsList();
    this.datasource = new MatTableDataSource(this.cars);
  }

  ngAfterViewInit(){
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator){
      this.datasource.paginator.firstPage();
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
    this.datasource = new MatTableDataSource<CarsGet>(this.cars);
  }
}
