/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { MachineAttribute, Machine } from '../types';
import { ActionTypes } from '../store/actionTypes';
import { RouteProp, useRoute } from '@react-navigation/native';
import MachineItemCard from '../components/MachineItemCard';
import { addMachineItemAction } from '../store/actions/machineItemActions';
import { getRandomId } from '../utils';

type RootStackParamList = {
  MachineTypeDetail: { machineTypeId: string };
};

type MachineTypeDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'MachineTypeDetail'
>;

const MachineTypeDetailScreen: React.FC = () => {
  const dispatch = useDispatch();

  const route = useRoute<MachineTypeDetailScreenRouteProp>();

  const { machineTypeId } = route.params;

  const machineTypes = useSelector((state: RootState) => state.machineTypes);
  const allMachines = useSelector((state: RootState) => state.machines);
  const currentMachineType = machineTypes.find(
    type => type.id === machineTypeId,
  );

  const currentMachineTypeItems = allMachines.filter(
    machineItem => machineItem.typeId === currentMachineType?.id,
  );

  // const [newMachineName, setNewMachineName] = useState('');
  // const [, setNewMachineAttributes] = useState<MachineAttribute[]>([]);

  useEffect(() => {
    // Load the existing machine type and its machines from your data store or API
    // Update the component state with the loaded data
  }, [machineTypeId]);

  const handleAddMachine = () => {
    const newMachineItem: Machine = {
      id: getRandomId(),
      typeId: currentMachineType?.id as string,
    };
    dispatch(addMachineItemAction(newMachineItem));
  };

  console.log('currentMachineType.attributes', currentMachineType?.attributes);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{currentMachineType?.name || ''}</Text>
        <Button title="Add Machine" onPress={handleAddMachine} />
      </View>

      <ScrollView>
        {(currentMachineTypeItems || []).map((machineTypeItem: Machine) => (
          <MachineItemCard
            key={machineTypeItem.id}
            machineTypeAttributes={currentMachineType?.attributes || []}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#2980b9',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
});

export default MachineTypeDetailScreen;
