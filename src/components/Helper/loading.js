import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

export default class loading extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 16, color: '#0000ff' }}> Loading... </Text>
        </View>
      </View>
    );
  }
}
