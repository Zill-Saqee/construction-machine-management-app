// src/redux/actions/machineTypesActions.ts

import { ActionTypes } from '../actionTypes';
import { MachineType } from '../../types';

// export const setMachineTypes = machineTypes => {
//   return async dispatch => {
//     try {
//       await AsyncStorage.setItem(
//         STORAGE_KEYS.MACHINE_TYPES,
//         JSON.stringify(machineTypes),
//       );
//       dispatch({ type: 'SET_MACHINE_TYPES', payload: machineTypes });
//     } catch (error) {
//       console.error('Error saving machine types:', error);
//     }
//   };
// };

export const setMachineTypes = machineTypes => {
  return {
    type: ActionTypes.SET_MACHINE_TYPES,
    payload: machineTypes,
  };
};

export const editMachineType = (updatedMachineType: MachineType) => {
  return {
    type: ActionTypes.EDIT_MACHINE_TYPE,
    payload: updatedMachineType,
  };
};
