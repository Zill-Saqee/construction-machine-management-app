import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const AttributeInput = ({ initialLabel, options, onChange }) => {
  const [label, setLabel] = useState(initialLabel);
  const [selectedValue, setSelectedValue] = useState('');

  const handleLabelChange = text => {
    setLabel(text);
    onChange(selectedValue, text);
  };

  const handleValueChange = value => {
    setSelectedValue(value);
    onChange(value, label);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.labelInput}
        value={label}
        onChangeText={handleLabelChange}
        placeholder="Attribute Label"
        placeholderTextColor="#ccc"
      />
      <Picker
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
        style={styles.picker}>
        <Picker.Item label="Type" value="" />
        {options.map(option => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
      <TouchableOpacity onPress={() => {}}>
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
    flex: 3,
    fontSize: 16,
    paddingVertical: 5,
    color: '#333',
  },
  picker: {
    flex: 2,
    borderWidth: 1,
    backgroundColor: 'lightgrey',
    fontSize: 1,
  },
});

export default AttributeInput;
