import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, View, Text } from 'react-native';

export default class SignupSection extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 65,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});