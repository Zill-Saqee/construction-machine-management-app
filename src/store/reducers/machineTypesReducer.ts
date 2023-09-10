import { MachineType } from '../../types';
import { ActionTypes } from '../actionTypes';
export interface SetMachineTypesAction {
  type: ActionTypes.SET_MACHINE_TYPES;
  payload: MachineType[];
}

export interface AddMachineTypeAction {
  type: ActionTypes.ADD_MACHINE_TYPE;
  payload: MachineType;
}
export interface EditMachineTypeAction {
  type: ActionTypes.EDIT_MACHINE_TYPE;
  payload: MachineType;
}

export interface DeleteMachineTypeAction {
  type: ActionTypes.DELETE_MACHINE_TYPE;
  payload: MachineType;
}

const initialState: MachineType[] = [];

type MachineTypesReducerAction =
  | AddMachineTypeAction
  | EditMachineTypeAction
  | DeleteMachineTypeAction;

const machineTypesReducer = (
  state = initialState,
  action: MachineTypesReducerAction,
): MachineType[] => {
  switch (action.type) {
    case ActionTypes.ADD_MACHINE_TYPE:
      return [...state, action.payload];
    case ActionTypes.EDIT_MACHINE_TYPE:
      return state.map(machineType =>
        machineType.id === action.payload.id
          ? { ...machineType, ...action.payload }
          : machineType,
      );
    case ActionTypes.DELETE_MACHINE_TYPE:
      return state.filter(machineType => machineType.id !== action.payload.id);
    default:
      return state;
  }
};

export default machineTypesReducer;
