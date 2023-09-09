import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MachineAttribute } from '../types';

type AttributeInputProps = {
  options: string[];
  attribute: MachineAttribute;
  onChange: (attr: MachineAttribute) => void;
  removeAttribute: () => void;
};

const AttributeInput = ({
  options,
  onChange,
  removeAttribute,
  attribute,
}: AttributeInputProps) => {
  const [label, setLabel] = useState(attribute.name);
  const [selectedValue, setSelectedValue] = useState(attribute.type);

  const handleNameChange = text => {
    setLabel(text);
    onChange({
      ...attribute,
      name: text,
    });
  };

  const handleTypeChange = value => {
    setSelectedValue(value);
    onChange({
      ...attribute,
      type: value,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.labelInput}
        value={label}
        onChangeText={handleNameChange}
        placeholder="Attribute Label"
        placeholderTextColor="#ccc"
      />
      <Picker
        selectedValue={selectedValue}
        onValueChange={handleTypeChange}
        style={styles.picker}>
        <Picker.Item label="Type" value="" />
        {options.map(option => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
      <TouchableOpacity onPress={removeAttribute}>
        <View style={styles.deleteIconContainer}>
          <Icon name="trash" size={30} color="#777" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  deleteIconContainer: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  labelInput: {
    flex: 5,
    fontSize: 16,
    paddingVertical: 5,
    color: '#333',
  },
  picker: {
    flex: 6,
    borderWidth: 1,
    backgroundColor: 'lightgrey',
    fontSize: 1,
  },
});

export default AttributeInput;
