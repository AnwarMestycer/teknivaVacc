import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encours } from './encours';

@Injectable({
  providedIn: 'root'
})
export class EncoursService {
baseAPI=''
encours!:Encours[]

  constructor(private http:HttpClient) { }
  addEncoursService() : Observable <Encours[]>{
    return this.http.post<Encours[]>(this.baseAPI,this.encours)
   }
}
