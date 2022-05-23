import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Childvaccin } from './childvaccin';

@Injectable({
  providedIn: 'root'
})
export class AddnewchildService {
child!:Childvaccin[];
baseAPI="";
  constructor(private http:HttpClient) { }
  addChildVaccinService() : Observable<Childvaccin[]>{
   return this.http.post <Childvaccin[]>(this.baseAPI,this.child)
  }
}
