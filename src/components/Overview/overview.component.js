import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Overview extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#cacaca ',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text> Overview </Text>
      </View>
    );
  }
}
