import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //this class is used to inject services and utilise them whenever needed
  //Web-Developer:Mohammed Ismail.

  //list of employee
  public employeeList:Employee[]=[];

  //employee model to create new employee
  public newEmployee:Employee={
    id:0,
    employeeName:"",
    address:"",
    phone:0,
    country:""  
  };

  public delEmployee:Employee={
    id:0,
    employeeName:"",
    address:"",
    phone:0,
    country:""  
  };

  //to have a copy of update employee details
  public curEmployee:Employee={
    id:0,
    employeeName:"",
    address:"",
    phone:0,
    country:""  
  };


  constructor(private employeeService:EmployeeService) { }
  
  ngOnInit(): void {
    this.getEmployeeList();
  }

  //to get employees list
  getEmployeeList(){
    this.employeeService.getEmployeeList().subscribe((resp)=>{
      this.employeeList=resp;
    },(error:HttpErrorResponse)=>{
      alert(error.message);
    });
  }

  //to create new employee
  createEmployee(addForm: NgForm){
    this.employeeService.create(this.newEmployee).subscribe((resp)=>{
      this.getEmployeeList();
      addForm.reset();
    },(error:HttpErrorResponse)=>{
      alert(error.message);
    });
  }

  //to delete employee
  deleteEmployee(employee:Employee){
    this.delEmployee=employee;
  }

  //after confirmation from user deletes it permanently
  OnDeleteEmployee(){
    this.employeeService.deleteEmployee(this.delEmployee.id).subscribe((resp)=>{
      this.getEmployeeList();
    },(error:HttpErrorResponse)=>{
      alert(error.message);
    });
  }


  //get the employee detail by id, used for update purposes
  getEmployeeById(currentEmployee: Employee){

    console.log(currentEmployee);
    this.employeeService.getEmployeeById(currentEmployee.id).subscribe((resp)=>{
      this.curEmployee=resp;
    },(error:HttpErrorResponse)=>{
      alert(error.message);
    });

  }

  //updates the new details provided the user
  onUpdate(updateForm: NgForm){

    this.employeeService.updateEmployee(this.curEmployee).subscribe((resp)=>{
      this.getEmployeeList();
      
    },(error:HttpErrorResponse)=>{
      alert(error.message);
    });

  }


  




}
