import React, { Component } from 'react';
import { View } from 'react-native';
// Components
import Header from '../components/Header/header.component';
import TabNav from '../components/Navigation/hometabbar.component';

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header {...this.props} />
        <TabNav />
      </View>
    );
  }
}

export default Home;
