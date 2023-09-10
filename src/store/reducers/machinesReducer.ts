import { Machine } from '../../types';
import { ActionTypes } from '../actionTypes';

const initialState: Machine[] = [];

type AddNewMachineAction = {
  type: ActionTypes.ADD_MACHINE;
  payload: Machine;
};

type EditNewMachineAction = {
  type: ActionTypes.EDIT_MACHINE;
  payload: Machine;
};

type DeleteMachineAction = {
  type: ActionTypes.DELETE_MACHINE;
  payload: Machine;
};

type DeleteAllMachineTypeItemsAction = {
  type: ActionTypes.DELETE_ALL_MACHINE_TYPE_ITEMS;
  payload: Machine;
};

type MachinesReducerActionType =
  | AddNewMachineAction
  | EditNewMachineAction
  | DeleteMachineAction
  | DeleteAllMachineTypeItemsAction;

const machinesReducer = (
  state: Machine[] = initialState,
  action: MachinesReducerActionType,
): Machine[] => {
  switch (action.type) {
    case ActionTypes.ADD_MACHINE:
      return [...state, action.payload];
    case ActionTypes.EDIT_MACHINE:
      return state.map(machine =>
        machine.id === action.payload.id
          ? { ...machine, ...action.payload }
          : machine,
      );
    case ActionTypes.DELETE_MACHINE:
      return state.filter(machineItem => machineItem.id !== action.payload.id);
    case ActionTypes.DELETE_ALL_MACHINE_TYPE_ITEMS:
      return state.filter(
        machineItem => machineItem.typeId !== action.payload.typeId,
      );
    default:
      return state;
  }
};
export default machinesReducer;
