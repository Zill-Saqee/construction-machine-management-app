import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MachineTypesScreen from '../components/MachineTypeScreen';
import DashboardScreen from '../components/DashboardScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
      <Drawer.Screen name="MachineTypesScreen" component={MachineTypesScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
