/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class App extends Component {
  constructor() {
    this.state = {
      customStyles: {
        opacity: 0
      }
    }

    setInterval(() => {
      this.setState({
        customStyles: {
          opacity: 1
        }
      })
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, this.state.customStyles]}>Welcome to React Native!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#232323',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
