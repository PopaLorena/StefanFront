import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { ViewCarsComponent } from './pages/view-cars/view-cars.component';
import { ViewRepairComponent } from './pages/view-repair/view-repair.component';
import { ViewCurseComponent } from './pages/view-curse/view-curse.component';
@NgModule({
  declarations: [
    AppComponent,
    AdministratorComponent,
    HomeComponent,
    HeaderComponent,
    ViewCarsComponent,
    ViewRepairComponent,
    ViewCurseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
