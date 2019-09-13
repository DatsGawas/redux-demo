
import {Employee, EmployeeNamespace} from "./store";
import {EmployeeActions, EmployeeActionsTypes} from "./action";
/**
 * Created by dattaram on 11/9/19.
 */



export const INITIAL_STATE: EmployeeNamespace.EmployeeState = {
  currentEmployee: new Employee(),
  employeeList: []
};





export function EmployeeReducer(state = INITIAL_STATE, action: EmployeeActions) {
  switch (action.type) {
    case EmployeeActionsTypes.LoadEmployee: {
      return {
        ...state,
        employeeList: action.data
      };
    }
    case EmployeeActionsTypes.UpdateEmployee: {
      return {
        ...state,
        employeeList: UpdateEmployeeStore(state.employeeList, action)
      };
    }

    case EmployeeActionsTypes.AddEmployee: {
      return {
        ...state,
        employeeList: UpdateEmployeeStore(state.employeeList, action)
      };
    }

    case EmployeeActionsTypes.DeleteEmployee: {
      return {
        ...state,
        employeeList: UpdateEmployeeStore(state.employeeList, action)
      };
    }
  }
}


/* UPDATE STORE */

export function UpdateEmployeeStore(employeeList: Employee[], action: any): Employee[] {
  if(action.type === 'UpdateEmployee'){
    employeeList.forEach((emp: Employee, index: number) => {
      if (emp.id === action.data.id) {
        employeeList[index] = action.data;
      }
    });
  } else if (action.type === 'AddEmployee') {
    employeeList.push(action.data);
  } else if (action.type === 'DeleteEmployee') {
    employeeList.forEach((emp: Employee, index: number) => {
      if (emp.id === action.data.id) {
        employeeList.splice(index, 1);
      }
    });
  }
  return employeeList;

}

