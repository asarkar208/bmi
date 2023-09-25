// BMIResult.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BMIResult({ route }) {
  const { bmi } = route.params;

  // Determine the BMI category and corresponding color
  let category = '';
  let categoryColor = '';
  if (bmi < 18.5) {
    category = 'Underweight';
    categoryColor = 'blue';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal Weight';
    categoryColor = 'green';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
    categoryColor = 'orange';
  } else {
    category = 'Obesity';
    categoryColor = 'red';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Your BMI is: {bmi}</Text>
      <Text style={[styles.categoryText, { color: categoryColor }]}>
        Category: {category}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: 18,
    marginTop: 10,
  },
});
