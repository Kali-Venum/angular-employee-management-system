import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getManagers(): Observable<any> {
    return this.http.get('http://localhost:9000/emp/api/v1/managers');
  }
}
