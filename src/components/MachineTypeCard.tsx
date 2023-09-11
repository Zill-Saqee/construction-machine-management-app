import React, { useEffect, useMemo, useState } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import * as _ from 'lodash';
import AttributeEditor from './AttributeEditor';
import { TextInput } from 'react-native';
import { AttributeType, MachineAttribute, MachineType } from '../types';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteMachineTypeAction,
  editMachineTypeAction,
} from '../store/actions/machineTypeActions';
import { getRandomId } from '../utils';
import { deleteAllMachineTypeItemsAction } from '../store/actions/machineItemActions';
import { RootState } from '../store';

const MachineTypeCard = ({ machineType }) => {
  const [machineTypeClone, setMachineTypeClone] = useState<MachineType>({
    ...machineType,
  });

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const allMachineTypes = useSelector((state: RootState) => state.machineTypes);

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
        if (attr.id !== changedAttr.id) {
          return attr;
        }
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
          id: getRandomId(),
          name: '',
          type: AttributeType.TEXT, // Default: Text
        },
      ],
    });
  };

  const deleteMachineType = (machineTypeToDelete: MachineType) => {
    dispatch(deleteMachineTypeAction(machineTypeToDelete));
    dispatch(deleteAllMachineTypeItemsAction(machineTypeToDelete));
  };

  const saveAllChanges = () => {
    const isChanged = !_.isEqual(machineType, machineTypeClone);
    if (!isChanged) {
      return;
    }
    const isDuplicate = allMachineTypes.find(
      type =>
        type.name === machineTypeClone.name && type.id !== machineTypeClone.id,
    );
    if (!machineTypeClone?.name || isDuplicate) {
      Alert.alert('Error', 'Name is empty or already taken');
      return;
    } else if (
      _.uniqBy(machineTypeClone.attributes, 'name').length !==
      machineTypeClone.attributes.length
    ) {
      Alert.alert('Error', 'Duplicate attributes found');
      return;
    } else if (machineTypeClone.attributes.find(a => !a?.name)) {
      Alert.alert('Error', 'Please correct attribute name');
      return;
    }

    dispatch(editMachineTypeAction(machineTypeClone));
  };

  return (
    <Card style={styles.card}>
      <Card.Title titleStyle={styles.boldText} title={machineTypeClone.name} />
      <Card.Content>
        <View style={styles.nameInput}>
          <TextInput
            value={machineTypeClone.name}
            placeholder={'Machine Name'}
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
          <Button
            title="Delete"
            onPress={() => deleteMachineType(machineTypeClone)}
          />
          {isMachineTypeChanged && (
            <Button title="Update" onPress={saveAllChanges} />
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
    backgroundColor: '#3498db',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  nameInput: {
    borderWidth: 1,
    borderColor: '#ccc',
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
    fontSize: 10,
    gap: 5,
  },
});

export default MachineTypeCard;
