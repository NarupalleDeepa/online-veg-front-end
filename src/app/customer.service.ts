import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {



    private baseURL = "http://localhost:8080/api/v1/customers";
  
    constructor(private httpClient: HttpClient) { }
    
    getCustomersList(): Observable<Customer[]>{
      return this.httpClient.get<Customer[]>(`${this.baseURL}`);
    }
  
    createCustomer(customer: Customer): Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`, customer);
    }
  
    getCustomerById(id: number): Observable<Customer>{
      return this.httpClient.get<Customer>(`${this.baseURL}/${id}`);
    }
  
    updateCustomer(id: number, customer: Customer): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`, customer);
    }
  
    deleteCustomer(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
  }

 

