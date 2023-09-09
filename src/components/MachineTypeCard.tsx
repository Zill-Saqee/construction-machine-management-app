import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import AttributeEditor from './AttributeEditor';
import { TextInput } from 'react-native-gesture-handler';

const MachineTypeCard = ({ machineType }) => {
  return (
    <Card style={styles.card}>
      {/* <Card.Title title={machineType.name} /> */}
      <Card.Content>
        <View style={styles.container}>
          <TextInput
            value={machineType.name}
            placeholder="Name"
            style={styles.input}
            placeholderTextColor="red"
          />
        </View>
        <AttributeEditor
          machineTypeId={machineType.id}
          attributes={machineType.attributes}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    borderRadius: 4,
    marginBottom: 5,
  },
  input: {
    borderColor: '#ccc',
    padding: 8,
    color: '#333',
  },
  card: {
    margin: 10,
    padding: 1,
  },
});

export default MachineTypeCard;
