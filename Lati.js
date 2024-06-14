import React, { useEffect, useState } from 'react';
import {
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { Marker, MapView } from 'react-native-maps';
const App = () => {
  const [value, setValue] = useState('--');
  useEffect(
    () => { requestCameraPermission() }, []
  )
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Location Permission',
          message:
            'Cool Photo App needs access to your Location ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude);
        setValue(position.coords)
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.item}>latitude {value.latitude} -- longitude {value.longitude}</Text>
      <Button title="Get Location" onPress={
        () => { getLocation() }
      } />
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red'
  },
});
export default App;







