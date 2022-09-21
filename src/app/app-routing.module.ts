import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataUpdateComponent } from './data-update/data-update.component';
import { DataSearchComponent } from './data-search/data-search.component';
import { UploadDataComponent } from './upload-data/upload-data.component';

const routes: Routes = [
  { path: 'search', component: DataSearchComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'upload', component: UploadDataComponent },
  { path: 'update/:id', component: DataUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
