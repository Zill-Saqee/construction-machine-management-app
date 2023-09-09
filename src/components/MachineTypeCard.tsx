import React, { useEffect, useMemo, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import * as _ from 'lodash';
import AttributeEditor from './AttributeEditor';
import { TextInput } from 'react-native';
import { AttributeType, MachineType } from '../types';
import { useIsFocused } from '@react-navigation/native';

const MachineTypeCard = ({ machineType }) => {
  const [machineTypeClone, setMachineTypeClone] = useState<MachineType>({
    ...machineType,
  });

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      setMachineTypeClone(machineType);
    }
  }, [isFocused, machineType]);

  const handleNameChange = updatedName => {
    setMachineTypeClone({
      ...machineTypeClone,
      name: updatedName,
    });
  };

  const isMachineTypeChanged = useMemo(
    () => !_.isEqual(machineType, machineTypeClone),
    [machineType, machineTypeClone],
  );

  const saveAttributes = () => {
    // dispatch(updateMachineTypeAttributes({ machineTypeId, attributes: editedAttributes }));
  };

  const handleAttributeChange = () => {};

  const removeAttribute = (attributeId: string) => {
    setMachineTypeClone({
      ...machineTypeClone,
      attributes: machineTypeClone.attributes.filter(
        attr => attr.id !== attributeId,
      ),
    });
  };

  const addNewAttribute = () => {
    setMachineTypeClone({
      ...machineTypeClone,
      attributes: [
        ...machineTypeClone.attributes,
        {
          id: (Math.random() * 10000).toString(),
          name: '',
          type: AttributeType.TEXT,
        },
      ],
    });
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.nameInput}>
          <TextInput
            value={machineTypeClone.name}
            placeholder={machineTypeClone.name ?? 'Name'}
            style={styles.input}
            onChangeText={handleNameChange}
          />
        </View>
        <AttributeEditor
          attributes={machineTypeClone.attributes}
          handleAttributeChange={handleAttributeChange}
          removeAttribute={removeAttribute}
        />
        <View style={styles.actionBtns}>
          <Button title="Add Attribute" onPress={addNewAttribute} />
          {isMachineTypeChanged && (
            <Button title="Save Changes" onPress={saveAttributes} />
          )}
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  nameInput: {
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
    padding: 2,
    margin: 10,
  },
  actionBtns: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
});

export default MachineTypeCard;
