import React, { useEffect, useMemo, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import * as _ from 'lodash';
import AttributeEditor from './AttributeEditor';
import { TextInput } from 'react-native';
import { AttributeType, MachineAttribute, MachineType } from '../types';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { editMachineType } from '../store/actions/machineTypeActions';

const MachineTypeCard = ({ machineType }) => {
  const [machineTypeClone, setMachineTypeClone] = useState<MachineType>({
    ...machineType,
  });

  const isFocused = useIsFocused();

  const dispatch = useDispatch();

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

  const handleAttributeChange = (changedAttr: MachineAttribute) => {
    setMachineTypeClone({
      ...machineTypeClone,
      attributes: machineTypeClone.attributes.map(attr => {
        if (attr.id !== changedAttr.id) return attr;
        return changedAttr;
      }),
    });
  };

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

  const saveAllChanges = () => {
    dispatch(editMachineType(machineTypeClone));
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.nameInput}>
          <TextInput
            value={machineTypeClone.name}
            placeholder={machineTypeClone.name ?? 'Name'}
            style={styles.nameInputField}
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
            <Button title="Save Changes" onPress={saveAllChanges} />
          )}
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 0,
    margin: 10,
  },
  nameInput: {
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameInputField: {
    borderColor: '#ccc',
    padding: 8,
    color: '#333',
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
