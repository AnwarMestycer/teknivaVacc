import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Childvaccin } from './childvaccin';

@Injectable({
  providedIn: 'root',
})
export class ChildvaccinService {
  baseAPI = 'http://localhost:3000/api/v1/childs';
  childvaccin!: Childvaccin[];
  constructor(private http: HttpClient) {}
  getChild(): Observable<Childvaccin[]> {
    return this.http.get<Childvaccin[]>(this.baseAPI);
  }
}
