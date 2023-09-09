import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { MachineAttribute, Machine } from '../types';
import { ActionTypes } from '../store/actionTypes';
import { RouteProp, useRoute } from '@react-navigation/native';

// interface MachineTypeDetailScreenProps {
//   route: { params: { machineTypeId: string } };
//   navigation: any; // Use the appropriate type for your navigation library
// }

type RootStackParamList = {
  MachineTypeDetail: { machineTypeId: string };
  // Define other screens and their parameters if needed
};

type MachineTypeDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'MachineTypeDetail'
>;

const MachineTypeDetailScreen: React.FC = () => {
  const dispatch = useDispatch();

  const route = useRoute<MachineTypeDetailScreenRouteProp>(); // Use useRoute to get the route prop

  const { machineTypeId } = route.params;

  const machineTypes = useSelector((state: RootState) => state.machineTypes);
  const machineType = machineTypes.find(type => type.id === machineTypeId);

  const [newMachineName, setNewMachineName] = useState('');
  const [, setNewMachineAttributes] = useState<MachineAttribute[]>([]);

  useEffect(() => {
    // Load the existing machine type and its machines from your data store or API
    // Update the component state with the loaded data
  }, [machineTypeId]);

  const handleAddMachine = () => {
    // Create a new machine and add it to the machine list
    const newMachine: Machine = {
      id: 'new-machine-id', // Generate a unique ID for the new machine
      typeId: machineTypeId,
      // Set other attributes based on the user input or default values
    };

    // Dispatch an action to add the new machine to your Redux store or save it to AsyncStorage
    dispatch({ type: ActionTypes.ADD_MACHINE, payload: newMachine });

    // Clear input fields
    setNewMachineName('');
    setNewMachineAttributes([]);
  };

  const handleEditMachineType = () => {
    // Implement logic to edit the machine type attributes
    // Update the machine type in your Redux store or save it to AsyncStorage
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{machineType?.name}</Text>

      {/* Display and edit machine type attributes */}
      {machineType?.attributes.map(attribute => (
        <TextInput
          key={attribute.id}
          style={styles.input}
          value={attribute.name}
          onChangeText={() => {
            // Update the attribute name in the state
          }}
        />
      ))}

      {/* Add a new machine */}
      <Text>Add a New Machine:</Text>
      <TextInput
        style={styles.input}
        placeholder="Machine Name"
        value={newMachineName}
        onChangeText={text => setNewMachineName(text)}
      />
      {/* Render input fields for other machine attributes based on attribute type */}

      <Button title="Add Machine" onPress={handleAddMachine} />

      <Button title="Edit Machine Type" onPress={handleEditMachineType} />

      {/* List of machines for this machine type */}
      <FlatList
        data={machineType?.machines ?? []}
        renderItem={({ item }) => (
          <View>
            {/* Display machine details and provide edit functionality */}
            <Text>{item.id}</Text>
            {/* Render machine attributes based on attribute type */}
            <Button
              title="Edit"
              onPress={() => {
                // Navigate to the edit machine screen with the selected machine
                // navigation.navigate('EditMachineScreen', { machine: item });
              }}
            />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
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
