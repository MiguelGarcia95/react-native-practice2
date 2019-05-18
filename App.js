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
      username: '',
      password: ''
    }
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed() {
    console.log(this.state.username, this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
          defaultValue={this.state.username}
          onChangeText={text => this.setState({username: text})}
        />

        <Text>Password</Text>
        <TextInput
          defaultValue={this.state.username}
          onChangeText={text => this.setState({username: text})}
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
