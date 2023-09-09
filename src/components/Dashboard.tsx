import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type MachineType = {
  id: number;
  name: string;
};

type MachineTypesScreenProps = {
  navigation: StackNavigationProp<any>;
};

const Dashboard: React.FC<MachineTypesScreenProps> = ({navigation}) => {
  const machineTypes: MachineType[] = [
    {id: 1, name: 'Bulldozer'},
    {id: 2, name: 'Cranes'},
    // Add more machine types
  ];

  return (
    <View>
      <Text>Dashboard</Text>
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
    </View>
  );
};

export default Dashboard;
