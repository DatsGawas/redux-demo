import {Employee} from "./store";
/**
 * Created by dattaram on 11/9/19.
 */

export interface Action {
  type: string;
  data: Employee | Employee[];
}

export enum EmployeeActionsTypes {
  LoadEmployee = 'LoadEmployee',
  CurrentEmployee = 'CurrentEmployee',
  UpdateEmployee = 'UpdateEmployee',
  AddEmployee = 'AddEmployee',
  DeleteEmployee = 'DeleteEmployee'

}

export class CurrentEmployeeAction implements Action {
  readonly type = EmployeeActionsTypes.CurrentEmployee;
  constructor(public data: Employee) {
  }
}


export class LoadEmployeeAction implements Action {
  readonly type = EmployeeActionsTypes.LoadEmployee;
  constructor(public data: Employee[]) {
  }

}

export class UpdateEmployeeAction implements Action {
  readonly type = EmployeeActionsTypes.UpdateEmployee;
  constructor(public data: Employee) {
  }
}


export class AddEmployeeAction implements Action {
  readonly type = EmployeeActionsTypes.AddEmployee;
  constructor(public data: Employee) {
  }
}


export class DeleteEmployeeAction implements Action {
  readonly type = EmployeeActionsTypes.DeleteEmployee;
  constructor(public data: Employee) {
  }
}

export type EmployeeActions = CurrentEmployeeAction | LoadEmployeeAction | UpdateEmployeeAction | AddEmployeeAction | DeleteEmployeeAction ;
