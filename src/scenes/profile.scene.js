import React, { Component } from 'react';
import { View, Text } from 'react-native';
// Components
import Header from '../components/Header/header.component';
import TabNav from '../components/Navigation/hometabbar.component';

class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header {...this.props} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text> Profile </Text>
        </View>
      </View>
    );
  }
}

export default Profile;
