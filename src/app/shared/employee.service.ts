import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private firebase: AngularFireDatabase) { }
  empolyeeList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', Validators.minLength(8)),
    city: new FormControl(''),
    gender: new FormControl(''),
    depertment: new FormControl(''),
    hireDate: new FormControl(''),
    isPermanet: new FormControl(false)

  });

  getEmployeeList() {
    this.empolyeeList = this.firebase.list('employees');
    return this.empolyeeList.snapshotChanges();
  }



  insertEmployee(employee) {
    this.empolyeeList.push({
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      depertment: employee.depertment,
      hireDate: employee.hireDate,
      isPermanet: employee.isPermanet
    });
  }

  updateEmployee(employee) {
    this.empolyeeList.update(employee.$key,
      {
        fullName: employee.fullName,
        email: employee.email,
        mobile: employee.mobile,
        city: employee.city,
        gender: employee.gender,
        depertment: employee.depertment,
        hireDate: employee.hireDate,
        isPermanet: employee.isPermanet
      });
  }
  deleteEmployee($key: string) {
    this.empolyeeList.remove($key);
  };

  populateForm(employee){
   this.form.setValue(_.omit(employee,'departmentName'));
  }



}
