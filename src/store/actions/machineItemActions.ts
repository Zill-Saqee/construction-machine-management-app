import { Machine } from '../../types';
import { ActionTypes } from '../actionTypes';

export const addMachineItemAction = (newMachineItem: Machine) => {
  return {
    type: ActionTypes.ADD_MACHINE,
    payload: newMachineItem,
  };
};

export const editMachineItemAction = (updatedMachineItem: Machine) => {
  return {
    type: ActionTypes.EDIT_MACHINE,
    payload: updatedMachineItem,
  };
};
