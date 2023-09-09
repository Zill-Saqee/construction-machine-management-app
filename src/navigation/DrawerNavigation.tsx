import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MachineTypesScreen from '../screens/MachineTypeScreen';
import DashboardScreen from '../screens/DashboardScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="MachineTypes" component={MachineTypesScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
