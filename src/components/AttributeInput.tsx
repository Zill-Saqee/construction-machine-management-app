import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome'; // You may need to install this library

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
      <Icon name="trash" size={20} color="#ccc" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  icon: {
    marginRight: 8, // Margin between delete icon and input
  },
  labelInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: '#333',
  },
  picker: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'green',
  },
});

export default AttributeInput;
