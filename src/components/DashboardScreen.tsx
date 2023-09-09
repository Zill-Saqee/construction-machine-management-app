import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Button, StyleSheet} from 'react-native';

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation();
  const noMachineTypes = true;
  return (
    <View>
      {noMachineTypes ? (
        <View style={styles.container}>
          {/* <Text>No Machine Type</Text> */}
          <Button
            title="Add Category"
            onPress={() => navigation.navigate('MachineTypesScreen')}
          />
        </View>
      ) : (
        <Text>Helloo</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});

export default DashboardScreen;
