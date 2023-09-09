// // navigation/AppNavigator.tsx

// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import MachineTypesScreen from '../components/MachineTypeScreen';
// // import MachineTypeDetailScreen from '../components/MachineTypes/MachineTypeDetailScreen';
// // import MachinesScreen from '../components/Machines/MachinesScreen';
// // import MachineDetailScreen from '../components/Machines/MachineDetailScreen';

// const Stack = createStackNavigator();

// const AppNavigator: React.FC = () => {
//   return (
//     <Stack.Navigator initialRouteName="MachineTypes">
//       <Stack.Screen name="MachineTypes" component={MachineTypesScreen} />
//       {/* <Stack.Screen
//         name="MachineTypeDetail"
//         component={MachineTypeDetailScreen}
//       />
//       <Stack.Screen name="Machines" component={MachinesScreen} />
//       <Stack.Screen name="MachineDetail" component={MachineDetailScreen} /> */}
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;

// src/navigation/AppNavigator.tsx

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigation';
import MachineTypesScreen from '../components/MachineTypeScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{headerShown: true}}
        />
        <Stack.Screen name="Machines" component={MachineTypesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
