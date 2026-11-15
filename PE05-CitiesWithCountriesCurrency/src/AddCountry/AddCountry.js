import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';

export default function AddCountry({ addCountry, navigation }) {
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');

  const submit = () => {
    if (country === '' || currency === '') {
      alert('please complete form');
      return;
    }
    addCountry({
      country,
      currency,
      id: uuid.v4(),
    });
    setCountry('');
    setCurrency('');
    navigation.navigate('Countries');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Countries</Text>
      <TextInput
        placeholder="Country name"
        onChangeText={setCountry}
        style={styles.input}
        value={country}
      />
      <TextInput
        placeholder="Currency"
        onChangeText={setCurrency}
        style={styles.input}
        value={currency}
      />
      <TouchableOpacity onPress={submit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Country</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50,
  },
});