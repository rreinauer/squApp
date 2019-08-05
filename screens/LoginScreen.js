import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function LoginScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Login</Text>
    </ScrollView>
  );
}

LoginScreen.navigationOptions = {
  title: 'Login',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
