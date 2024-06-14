import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { notificationManager } from './NotificationManager';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.localNotify = notificationManager;
  }

  componentDidMount() {
    this.localNotify.configure();
  }

  onPressSendNotification = () => {
    this.localNotify.showNotification(
      1,
      "App Notification",
      "This is a local notification",
      {},
      { vibrate: true, vibration: 1000 }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Local Notification</Text>
        <TouchableOpacity 
          onPress={this.onPressSendNotification}
          style={styles.button}
        >
          <Text>Send Notification</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
  button: {
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
});
