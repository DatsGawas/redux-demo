/**
 * Created by dattaram on 11/9/19.
 */

import { createFeatureSelector, createSelector } from '@ngrx/store';


export namespace EmployeeNamespace {
  export interface EmployeeState {
    currentEmployee: Employee;
    employeeList: Employee[];
  }


  export const employeeState =  createFeatureSelector<EmployeeNamespace.EmployeeState>('EmployeeState');
  debugger;
  export const getEmployee = createSelector(
    employeeState,
    state => state
  );
}


export class Employee {
  id: string;
  fName: string;
  lName: string;
  email: string;
  salary: number;
  constructor() {
    this.id = '';
    this.fName = '';
    this.lName = '';
    this.email = '';
    this.salary = 0;
  }
}
