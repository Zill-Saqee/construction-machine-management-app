/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { TextInput } from 'react-native';
import { AttributeType, Machine, MachineAttribute } from '../types';
import { TextInputMask } from 'react-native-masked-text';
import { CheckBox } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import * as _ from 'lodash';
import { editMachineItemAction } from '../store/actions/machineItemActions';
type MachineItemCardProps = {
  machineTypeAttributes: MachineAttribute[];
  machineItem: Machine;
};

const MachineItemCard = ({
  machineTypeAttributes,
  machineItem,
}: MachineItemCardProps) => {
  const [machineItemClone, setMachineItemClone] = useState<Machine>({
    ...machineItem,
  });

  const isFocused = useIsFocused();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFocused) {
      setMachineItemClone(machineItem);
    }
  }, [isFocused, machineItem]);

  const isMachineItemChanged = useMemo(
    () => !_.isEqual(machineItem, machineItemClone),
    [machineItem, machineItemClone],
  );

  const handleChangeText = (attrId, updatedVal) => {
    setMachineItemClone({
      ...machineItemClone,
      [attrId]: updatedVal,
    });
  };

  const handleCheckboxChange = (attrId, status) => {
    setMachineItemClone({
      ...machineItemClone,
      [attrId]: !machineItemClone[attrId],
    });
  };

  const handleSaveItem = () => {
    dispatch(editMachineItemAction(machineItemClone));
  };
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
                value={machineItemClone[attr.id] as string}
                onChangeText={updatedVal =>
                  handleChangeText(attr.id, updatedVal)
                }
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
                value={machineItemClone[attr.id] as string}
                onChangeText={date => handleChangeText(attr.id, date)}
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
                onPress={status => handleCheckboxChange(attr.id, status)}
              />
            )}
          </View>
        ))}
        {isMachineItemChanged && (
          <View>
            <Button title="Save" onPress={handleSaveItem} />
          </View>
        )}
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
