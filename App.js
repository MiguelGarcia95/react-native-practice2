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
    super();
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.half1}>

        </View>
        <View style={styles.half2}>
          <View style={styles.half21}></View>
          <View style={styles.half22}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  half1: {
    flex: 1,
    backgroundColor: 'red'
  },
  half2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue'
  },
  half21: {
    flex: 1,
    backgroundColor: 'green'
  },
  half22: {
    flex: 1,
    backgroundColor: 'yellow'
  }
});

export default App;
