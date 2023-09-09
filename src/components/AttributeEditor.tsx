/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { FieldType, MachineAttribute } from '../types';
import AttributeInput from './AttributeInput';
// import { updateMachineTypeAttributes } from './machineTypesSlice';

const AttributeEditor = ({ machineTypeId, attributes }) => {
  const dispatch = useDispatch();
  const [editedAttributes, setEditedAttributes] = useState({ ...attributes });

  const handleAttributeChange = (attribute, value) => {
    setEditedAttributes({
      ...editedAttributes,
      [attribute]: value,
    });
  };

  const saveAttributes = () => {
    // dispatch(updateMachineTypeAttributes({ machineTypeId, attributes: editedAttributes }));
  };

  console.log(attributes);

  return (
    <View style={styles.container}>
      {attributes.map((attribute: MachineAttribute) => (
        <AttributeInput
          key={attribute.id}
          initialLabel={attribute.name}
          options={Object.values(FieldType)}
          onChange={() => {}}
        />
      ))}
      <Button title="Save" onPress={saveAttributes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 12,
    color: 'green',
  },
});

export default AttributeEditor;
