import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { CardviewComponent } from './cardview/cardview.component';
import { EmployeeComponent } from './employees/employee/employee.component';


const routes: Routes = [
  {path:'employee' ,component:EmployeeComponent},
  {path:'employeeList' ,component:EmployeeListComponent},
  {path:'' ,component:CardviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
