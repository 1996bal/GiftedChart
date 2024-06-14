import React from 'react';
import { View, Text, Button, Vibration, StyleSheet } from 'react-native';

export default function App() {
  const PATTERN = [100, 1000]; // 1 second on, 1 second off

  const startVibration = () => {
    Vibration.vibrate(PATTERN, true); // `true` means it will repeat indefinitely
    //Vibration.vibrate(1000) -> not continuoulsy
  };

  const stopVibration = () => {
    Vibration.cancel(); // Cancels any ongoing vibration
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vibration</Text>
      <Button title='Start' onPress={startVibration} />
      <Button title='Stop' onPress={stopVibration} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
