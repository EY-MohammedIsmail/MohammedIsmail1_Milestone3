import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //This class provides the functionality to communicate with our backend using API's
  //Web-Developer:Mohammed Ismail.
  
  base_url="http://localhost:3000/employees";

  

  constructor(private http:HttpClient) { }

  //get all employees 
  getEmployeeList():Observable<any>{
    return this.http.get(this.base_url);
  }

  //add new employee
  create(employee:Employee):Observable<any>{

    return this.http.post(this.base_url,employee);

  }

  //delete employee by Id
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.base_url}/${id}`);
  }

  //get employee by id
  getEmployeeById(id:number):Observable<any>{
    return this.http.get(`${this.base_url}/${id}`);
  }

  //update the employee based on id
  updateEmployee(employee:Employee):Observable<any>{
    return this.http.put(`${this.base_url}/${employee.id}`,employee);
  }

}
