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
    this.state = {}
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.handleChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323'
  }
});

export default App;
