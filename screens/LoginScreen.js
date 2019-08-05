import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: 'username placeholder',
      password: 'password placeholder',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
          }}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" />
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  title: 'Login',
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    paddingTop: 15,
    backgroundColor: '#add8e6',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
