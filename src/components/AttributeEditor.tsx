import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AttributeType, MachineAttribute } from '../types';
import AttributeInput from './AttributeInput';

const AttributeEditor = ({
  attributes,
  handleAttributeChange,
  removeAttribute,
}) => {
  return (
    <View style={styles.container}>
      {attributes.map((attribute: MachineAttribute) => (
        <AttributeInput
          key={attribute.id}
          initialLabel={attribute.name}
          options={Object.values(AttributeType)}
          onChange={handleAttributeChange}
          removeAttribute={() => removeAttribute(attribute.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
});

export default AttributeEditor;
