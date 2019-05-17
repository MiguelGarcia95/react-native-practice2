/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(newText) {
    this.setState({username: newText})
    console.log(`Username is ${newText}`)
  }

  handlePasswordChange(newText) {
    this.setState({password: newText})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
          onChangeText={this.handleUsernameChange}
        />

        <Text>Password</Text>
        <TextInput
          onChangeText={this.handlePasswordChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    padding: '10%'
  }
});

export default App;
