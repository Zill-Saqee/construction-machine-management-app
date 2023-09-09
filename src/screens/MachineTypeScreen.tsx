import React, { useCallback, useEffect } from 'react';
import { StyleSheet, Button, ScrollView } from 'react-native';
import MachineTypeCard from '../components/MachineTypeCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { MachineType, STORAGE_KEYS } from '../types';
import {
  addMachineTypeAction,
  setMachineTypes,
} from '../store/actions/machineTypeActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getRandomId } from '../utils';

const MachineTypesScreen = () => {
  const machineTypes: MachineType[] = useSelector(
    (state: RootState) => state.machineTypes,
  );

  const dispatch = useDispatch();

  const setMachineTypesInStoreFromStorage = useCallback(
    () => async () => {
      const machineTypesFromStorage = await AsyncStorage.getItem(
        STORAGE_KEYS.MACHINE_TYPES,
      );
      console.log('machineTypesFromStorage', machineTypesFromStorage);
      dispatch(setMachineTypes(machineTypesFromStorage));
    },
    [dispatch],
  );

  useEffect(() => {
    setMachineTypesInStoreFromStorage();
  }, [setMachineTypesInStoreFromStorage]);

  const addNewMachineType = () => {
    const newMachineType: MachineType = {
      id: getRandomId(),
      name: '',
      attributes: [],
      titleAttribute: '',
    };
    dispatch(addMachineTypeAction(newMachineType));
  };

  return (
    <ScrollView style={styles.container}>
      {machineTypes.map((machineType: MachineType) => (
        <MachineTypeCard key={machineType.name} machineType={machineType} />
      ))}
      <Button title="Add New Machine Type" onPress={addNewMachineType} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default MachineTypesScreen;
