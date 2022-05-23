import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reportencours } from './reportencours';
@Injectable({
  providedIn: 'root',
})
export class ReportService {
  report!: Reportencours[];
  baseAPI = '';
  constructor(private http: HttpClient) {}
  addreport(
  ): Observable<Reportencours[]> {
    return this.http.post<Reportencours[]>(this.baseAPI, this.report);
  }
}
