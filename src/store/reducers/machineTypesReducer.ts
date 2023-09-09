import { MachineAttribute, MachineType } from '../../types';
import { ActionTypes } from '../actionTypes';

export interface AddMachineTypeAction {
  type: ActionTypes.ADD_MACHINE_TYPE;
  payload: {
    id: string;
    name: string;
    attributes: MachineAttribute[];
    titleAttribute: string;
  };
}

export interface EditMachineTypeAction {
  type: ActionTypes.EDIT_MACHINE_TYPE;
  payload: {
    id: string;
    name: string;
    attributes: MachineAttribute[];
    titleAttribute: string;
  };
}

export interface DeleteMachineTypeAction {
  type: ActionTypes.DELETE_MACHINE_TYPE;
  payload: {
    id: string;
  };
}

const initialState: MachineType[] = [
  {
    id: '123',
    name: 'Crane',
    attributes: [],
    titleAttribute: 'modal',
  },
];

const machineTypesReducer = (
  state = initialState,
  action:
    | AddMachineTypeAction
    | EditMachineTypeAction
    | DeleteMachineTypeAction,
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
