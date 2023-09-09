import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MachineTypesScreen from '../components/MachineTypeScreen';
import Dashboard from '../components/Dashboard';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="MachineTypes" component={MachineTypesScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
