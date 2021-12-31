import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Mode } from 'src/app/models/mode.model';
import { Observable } from 'rxjs';
import { Settings } from 'src/app/models/settings.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseUrl = environment.backend;

  constructor(private http: HttpClient) {
    const backendIP = localStorage.getItem('BackendIP');
    if (backendIP) {
      this.baseUrl = backendIP;
    }
  }

  testConnection(): Observable<Settings> {
    return this.http.get<Settings>(`http://${this.baseUrl}/settings/`);
  }

  testConnectionOnIp(ip: string): Observable<Settings> {
    return this.http.get<Settings>(`http://${ip}/settings/`);
  }

  getAllModes(): Observable<Mode[]> {
    return this.http.get<Mode[]>(`http://${this.baseUrl}/palettes/`);
  }

  getSettings(): Observable<Settings> {
    return this.http.get<Settings>(`http://${this.baseUrl}/settings/`);
  }

  updateSettings(settings: Settings): Observable<Settings> {
    return this.http.patch<Settings>(`http://${this.baseUrl}/settings/`, settings);
  }

  updateCustomPalette(colorArray : string[]): Observable<any> {
    return this.http.patch<any>(`http://${this.baseUrl}/palettes/custom`, colorArray);
  }
}
