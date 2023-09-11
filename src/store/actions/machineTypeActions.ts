import { ActionTypes } from '../actionTypes';
import { MachineType } from '../../types';

export const addMachineTypeAction = (newMachineType: MachineType) => {
  return {
    type: ActionTypes.ADD_MACHINE_TYPE,
    payload: newMachineType,
  };
};

export const deleteMachineTypeAction = (deletedMachineType: MachineType) => {
  return {
    type: ActionTypes.DELETE_MACHINE_TYPE,
    payload: deletedMachineType,
  };
};

export const editMachineTypeAction = (updatedMachineType: MachineType) => {
  return {
    type: ActionTypes.EDIT_MACHINE_TYPE,
    payload: updatedMachineType,
  };
};
