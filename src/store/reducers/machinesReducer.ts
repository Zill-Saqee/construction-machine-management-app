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

type MachinesReducerActionType = AddNewMachineAction | EditNewMachineAction;

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
    // case ActionTypes.DELETE_MACHINE:
    //   return state.filter(machineType => machineType.id !== action.payload.id);
    default:
      return state;
  }
};
export default machinesReducer;
