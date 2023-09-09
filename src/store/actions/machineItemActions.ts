import { Machine } from '../../types';
import { ActionTypes } from '../actionTypes';

export const addMachineItemAction = (newMachineItem: Machine) => {
  return {
    type: ActionTypes.ADD_MACHINE,
    payload: newMachineItem,
  };
};
