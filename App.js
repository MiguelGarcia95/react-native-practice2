/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed() {
    const username = this._username._lastNativeText;
    const password = this._password._lastNativeText;
    console.log(username, password);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
          ref={input => this._username = input}
        />

        <Text>Password</Text>
        <TextInput
          ref={input => this._password = input}
        />

        <Button title={"Hey!"} onPress={this.buttonPressed} />
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
