import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Stars extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#cacaca',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text> Stars </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
