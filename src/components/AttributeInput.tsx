import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

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
      />
      <Picker
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
        style={styles.picker}>
        <Picker.Item label="Select an option" value="" />
        {options.map(option => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  labelInput: {
    fontSize: 16,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default AttributeInput;
