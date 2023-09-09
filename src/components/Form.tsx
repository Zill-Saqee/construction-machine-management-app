import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const validateForm = () => {
    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      email: formData.email ? '' : 'Email is required',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every(error => !error);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Form is valid, you can submit the data or perform further actions here
    }
  };

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        value={formData.name}
        onChangeText={text => setFormData({...formData, name: text})}
      />
      <Text style={styles.errorText}>{errors.name}</Text>

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={text => setFormData({...formData, email: text})}
      />
      <Text style={styles.errorText}>{errors.email}</Text>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    height: 'auto',
    backgroundColor: 'red',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
  },
});

export default Form;
