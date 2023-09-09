import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { TextInput } from 'react-native';
import { AttributeType, MachineAttribute } from '../types';
import { TextInputMask } from 'react-native-masked-text';
import { CheckBox } from 'react-native-elements';
type MachineItemCardProps = {
  machineTypeAttributes: MachineAttribute[];
};

const MachineItemCard = ({ machineTypeAttributes }: MachineItemCardProps) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        {machineTypeAttributes.map((attr: MachineAttribute) => (
          <View style={styles.inputWrapper}>
            {attr.type !== AttributeType.CHECKBOX && (
              <Text style={styles.label}>{attr.name}</Text>
            )}
            {[AttributeType.TEXT, AttributeType.NUMBER].includes(attr.type) && (
              <TextInput
                style={styles.inputField}
                // value={text}
                // onChangeText={handleChangeText}
                keyboardType={
                  attr.type === AttributeType.TEXT ? 'default' : 'numeric'
                }
                placeholder={`Enter ${attr.name}`}
              />
            )}
            {attr.type === AttributeType.DATE && (
              <TextInputMask
                style={styles.inputField}
                placeholder="Enter date (MM/DD/YYYY)"
                // value={dateValue}
                // onChangeText={handleDateChange}
                type={'datetime'}
                options={{
                  format: 'MM/DD/YYYY',
                }}
                keyboardType="numeric"
              />
            )}
            {attr.type === AttributeType.CHECKBOX && (
              <CheckBox
                style={styles.inputField}
                title={attr.name}
                iconType="material"
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
                checked={true}
                // onPress={handleCheckboxChange}
              />
            )}
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
    borderRadius: 4,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
  },
  checkboxText: {
    fontSize: 16,
    color: 'white',
  },
});

export default MachineItemCard;
