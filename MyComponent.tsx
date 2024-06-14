import React, {  useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { MyContext} from './MyProviderProps'




// Create a Component that Consumes the Context
export const MyComponent = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("MyComponent must be used within a MyProvider");
  }

  const { value, setValue, title, id, jd } = context;

var result = Object.values(jd).map((key) => key);

  return (
    <View style={styles.container}>
      <Text>{title}-{value}</Text>
      <Button title="Change Value" onPress={() => setValue(value + 1)} />
        <Text>{value}</Text>
        
    </View>
  );
};

// Define some basic styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });