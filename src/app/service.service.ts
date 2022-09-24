import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  get() {
    const url = environment.API_EndPoint + 'view.php';
    return this.httpClient.get(url).pipe(map(data => data));
  }
  getDetails(params: any) {
    console.log("params", params)
    const url = environment.API_EndPoint + 'view_one.php?id=' + params;
    return this.httpClient.get(url).pipe(map(data => data));
  }
  getDetailsNik(data: any) {
    const url = environment.API_EndPoint + 'view_one_nik.php?id=' + data;
    return this.httpClient.post(url, data).pipe(map(data => data));
  }
  updateKaryawan(params: any, data: any): Observable<any> {
    const url = environment.API_EndPoint + 'update.php?id=' + params;
    return this.httpClient.post<any>(url, data).pipe(map((data) => data));
  }
  uploadKaryawan(data: any): Observable<any> {
    const url = environment.API_EndPoint + 'upload.php';
    return this.httpClient.post<any>(url, data).pipe(map((data) => data));
  }
}
