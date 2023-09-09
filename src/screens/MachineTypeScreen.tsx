import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Form from '../components/Form';

type MachineType = {
  id: number;
  name: string;
};

type MachineTypesScreenProps = {
  navigation: StackNavigationProp<any>;
};

const MachineTypesScreen: React.FC<MachineTypesScreenProps> = ({
  navigation,
}) => {
  const machineTypes: MachineType[] = [
    {id: 1, name: 'Bulldozer'},
    {id: 2, name: 'Cranes'},
    // Add more machine types
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={machineTypes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MachineTypeDetail', {machineType: item})
            }>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    height: 'auto',
    backgroundColor: 'red',
  },
});

export default MachineTypesScreen;
