import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AddInvoiceService {


  constructor( private httpClient: HttpClient) { }


  serverUrl = environment.baseURL;

  get(url: string): Observable<any> {
      return this.httpClient.get(this.serverUrl + url);
  }

  post(url: string, data): Observable<any> {
      return this.httpClient.post(this.serverUrl + url, data);
  }

  // put(url: string, data: Invoice): Observable<any> {
  //     return this.httpClient.put(this.serverUrl + url, data);
  // }

  // delete(url: string, data: Invoice): Observable<any> {
  //     return this.httpClient.delete(this.serverUrl + url, { params: { id: data.id + '' } });
  // }



  getCurrentStock(url: string): Observable<any> {
    return this.httpClient.get(this.serverUrl + url);
}

}
