import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MachineTypeCard from '../components/MachineTypeCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { MachineType, STORAGE_KEYS } from '../types';
import { setMachineTypes } from '../store/actions/machineTypeActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  return (
    <View style={styles.container}>
      {machineTypes.map((machineType: MachineType) => (
        <MachineTypeCard key={machineType.name} machineType={machineType} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    height: 'auto',
    backgroundColor: 'blue',
  },
});

export default MachineTypesScreen;
