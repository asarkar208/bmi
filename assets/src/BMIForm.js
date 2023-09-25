// BMIForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function BMIForm({ navigation }) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const calculateBMI = () => {
    // Calculate BMI here
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);

    // Navigate to the result page with the BMI value
    navigation.navigate('BMIResult', { bmi });
  };

  return (
    <View>
      <Text>Enter your height (in cm):</Text>
      <TextInput
        placeholder="Height (cm)"
        keyboardType="numeric"
        onChangeText={text => setHeight(text)}
        value={height}
      />
      <Text>Enter your weight (in kg):</Text>
      <TextInput
        placeholder="Weight (kg)"
        keyboardType="numeric"
        onChangeText={text => setWeight(text)}
        value={weight}
      />
      <Button title="Calculate BMI" onPress={calculateBMI} />
    </View>
  );
}
