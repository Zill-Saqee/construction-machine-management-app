import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { Machine } from '../types';
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

  const handleAddMachine = () => {
    if (!currentMachineType?.attributes?.length) {
      Alert.alert('Error', 'Please add its attributes first');
      return;
    }
    const newMachineItem: Machine = {
      id: getRandomId(),
      typeId: currentMachineType?.id as string,
    };
    dispatch(addMachineItemAction(newMachineItem));
  };

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
            machineItem={machineTypeItem}
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
