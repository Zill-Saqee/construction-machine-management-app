import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, ScrollView } from 'react-native';
import MachineTypeCard from '../components/MachineTypeCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { MachineType } from '../types';
import {
  addMachineTypeAction,
  deleteMachineTypeAction,
} from '../store/actions/machineTypeActions';
import { getRandomId } from '../utils';
import { useIsFocused } from '@react-navigation/native';

const MachineTypesScreen = () => {
  const [newlyCreatedMachineTypes, setNewlyCreatedMachineTypes] = useState<
    MachineType[]
  >([]);
  const machineTypes: MachineType[] = useSelector(
    (state: RootState) => state.machineTypes,
  );

  const isFocused = useIsFocused();

  const dispatch = useDispatch();

  const addNewMachineType = () => {
    const newMachineType: MachineType = {
      id: getRandomId(),
      name: '',
      attributes: [],
      titleAttribute: '',
    };
    setNewlyCreatedMachineTypes([...newlyCreatedMachineTypes, newMachineType]);
    dispatch(addMachineTypeAction(newMachineType));
  };

  useEffect(() => {
    if (!isFocused) {
      newlyCreatedMachineTypes.forEach(type => {
        if (!type.name) {
          dispatch(deleteMachineTypeAction(type));
        }
      });
    }
  }, [isFocused, dispatch, newlyCreatedMachineTypes]);

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
    backgroundColor: '#2980b9',
  },
});

export default MachineTypesScreen;
