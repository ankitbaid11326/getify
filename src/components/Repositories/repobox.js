import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RepoBox extends Component {
  render() {
    const url = this.props.url.split('https://api.github.com/repos/')[1];
    return (
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          height: 150,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0, 0, 0, 0.3)'
        }}
      >
        <View style={{ flex: 0.13 }}>
          <View style={{ alignItems: 'center', marginTop: 16 }}>
            <Icon size={24} name="github-square" color="rgb(91, 97, 105)" />
          </View>
        </View>

        <View style={{ flex: 0.87 }}>
          <View style={{ marginTop: 16, marginLeft: 8 }}>
            <Text style={{ fontSize: 20, color: 'rgb(70, 127, 214)', fontWeight: '600' }}>
              {url}
            </Text>
          </View>
          <View style={{ marginTop: 8, marginLeft: 8 }}>
            <Text style={{ fontSize: 14, color: 'rgb(91, 97, 105)', fontWeight: '500' }}>
              This will help to create a multiselect. This will help to create a multiselect
            </Text>
          </View>
          <View style={{ marginTop: 8, marginLeft: 8, flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon size={24} name="star" color="rgb(91, 97, 105)" />
              <Text style={{ fontSize: 18, color: 'rgb(91, 97, 105)' }}> 2 </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}>
              <Icon size={24} name="circle" color="yellow" />
              <Text style={{ fontSize: 18, color: 'rgb(91, 97, 105)' }}> 2 </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
