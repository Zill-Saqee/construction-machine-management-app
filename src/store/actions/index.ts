import { MachineAttribute } from '../../types';
import { ActionTypes } from '../actionTypes';

// Action types
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
