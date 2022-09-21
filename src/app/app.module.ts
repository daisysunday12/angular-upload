import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataKaryawanComponent } from './data-karyawan/data-karyawan.component';
import { DataUpdateComponent } from './data-update/data-update.component';
import { DataSearchComponent } from './data-search/data-search.component';
import { DataTableComponent } from './data-table/data-table.component';
import { UploadDataComponent } from './upload-data/upload-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DataKaryawanComponent,
    DataUpdateComponent,
    DataSearchComponent,
    DataTableComponent,
    UploadDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
