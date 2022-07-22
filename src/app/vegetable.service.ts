import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vegetable } from './vegetable';

@Injectable({
  providedIn: 'root'
})
export class VegetableService {

  

    private baseURL = "http://localhost:8080/api/v1/vegetables";
    private end="http://localhost:8080/api/v1/add";
    constructor(private httpClient: HttpClient) { }
    getVegetablesList(): Observable<Vegetable[]>{
      return this.httpClient.get<Vegetable[]>(`${this.baseURL}`);
    }
  
    createVegetable(vegetable:Vegetable): Observable<Object>{
    
      return this.httpClient.post(`${this.end}`,vegetable);
    
    }
  
    getVegetableById(id:number): Observable<Vegetable>{
    return this.httpClient.get<Vegetable>(`${this.baseURL}/${id}`);
    }
  
    updateVegetable(id: number, vegetable: Vegetable): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`, vegetable);
    }
    
    deleteVegetable(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
    
  }

 