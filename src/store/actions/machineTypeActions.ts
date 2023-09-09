// src/redux/actions/machineTypesActions.ts

import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'machineTypes';

export const setMachineTypes = machineTypes => {
  return async dispatch => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(machineTypes));
      dispatch({ type: 'SET_MACHINE_TYPES', payload: machineTypes });
    } catch (error) {
      console.error('Error saving machine types:', error);
    }
  };
};
