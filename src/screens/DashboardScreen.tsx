import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {List, Card} from 'react-native-paper';

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const machineTypes = useSelector((state: RootState) => state.machineTypes);

  return (
    <View style={styles.container}>
      {machineTypes?.length ? (
        <List.Section>
          {machineTypes.map(item => (
            <List.Item
              key={item.id}
              title={item.name}
              // left={() => <List.Icon icon="folder" />}
              onPress={() => navigation.navigate('MachineTypes')}
              style={styles.listItem}
            />
          ))}
        </List.Section>
      ) : (
        <Card elevation={3} style={styles.card}>
          <Card.Content>
            <Text style={styles.cardText}>
              Welcome to the Machine Management App
            </Text>
          </Card.Content>
          <TouchableOpacity
            onPress={() => navigation.navigate('MachineTypes')}
            style={styles.button}>
            <Text style={styles.buttonText}>Add Machine Type</Text>
          </TouchableOpacity>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  card: {
    margin: 16,
    padding: 16,
  },
  cardText: {
    fontSize: 18,
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default DashboardScreen;
