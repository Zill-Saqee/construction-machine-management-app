import React from 'react';
import { View, StyleSheet } from 'react-native';
import MachineTypeCard from '../components/MachineTypeCard';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { MachineType } from '../types';

const MachineTypesScreen = () => {
  const machineTypes: MachineType[] = useSelector(
    (state: RootState) => state.machineTypes,
  );

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
    padding: 20,
    height: 'auto',
    backgroundColor: 'red',
  },
});

export default MachineTypesScreen;
