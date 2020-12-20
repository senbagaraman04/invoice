import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface SettingsData {
    id: number;
    customerName: string;
    companyName: string;
    phoneNumber: number;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  constructor( private httpClient: HttpClient) { }


  serverUrl = environment.baseURL;

  get(url: string): Observable<any> {
      return this.httpClient.get<any>(this.serverUrl + url);
  }

  post(url: string, data: SettingsData): Observable<any> {
      return this.httpClient.post(this.serverUrl + url, data);
  }

  put(url: string, data: SettingsData): Observable<any> {
      return this.httpClient.put(this.serverUrl + url, data);
  }

  delete(url: string, data: SettingsData): Observable<any> {
      return this.httpClient.delete(this.serverUrl + url, { params: { id: data.id + '' } });
  }


}
