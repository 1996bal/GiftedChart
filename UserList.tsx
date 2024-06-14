import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { MyContext } from './MyProvider';

const UserList: React.FC = () => {
  const context = React.useContext(MyContext);

  if (!context) {
    return null;
  }

  const { users } = context;

  return (
    <ScrollView>
      {users.map(user => (
        <View key={user.id} style={styles.userContainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text>{user.username}</Text>
          <Text>{user.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  userName: {
    fontWeight: 'bold',
  },
});

export default UserList;
