import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MachineTypesScreen from '../screens/MachineTypeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  const machineTypes = useSelector((state: RootState) => state.machineTypes);

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      {machineTypes
        .filter(m => m.name !== '')
        .map(machineType => (
          <Drawer.Screen
            key={machineType.id}
            name={machineType.name}
            component={MachineTypesScreen}
          />
        ))}
      <Drawer.Screen name="Machine Types" component={MachineTypesScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
