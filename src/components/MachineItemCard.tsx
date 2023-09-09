import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { TextInput } from 'react-native';
import { AttributeType, MachineAttribute } from '../types';
type MachineItemCardProps = {
  machineTypeAttributes: MachineAttribute[];
};

const MachineItemCard = ({ machineTypeAttributes }: MachineItemCardProps) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        {machineTypeAttributes.map((attr: MachineAttribute) => (
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>{attr.name}</Text>
            <TextInput
              style={styles.inputField}
              // value={text}
              // onChangeText={handleChangeText}
              keyboardType={
                attr.type === AttributeType.TEXT ? 'default' : 'numeric'
              }
              placeholder={`Enter ${attr.name}`}
            />
          </View>
        ))}
        <View>
          <Button title="Save" />
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 0,
    margin: 10,
    backgroundColor: '#3498db',
  },
  inputWrapper: {
    marginBottom: 10,
    borderColor: '#ccc',
    borderRadius: 4,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    color: '#333',
  },
});

export default MachineItemCard;
