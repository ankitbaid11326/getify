import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Provider } from 'react-redux';

import configureStore from './src/store/store';
const store = configureStore();

// Scenes
import Home from './src/scenes/home.scene';
import Profile from './src/scenes/profile.scene';

// Creating Drawer
const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: ({ navigation }) => <Home navigation={navigation} />
  },
  Profile: {
    screen: ({ navigation }) => <Profile navigation={navigation} />
  }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppDrawerNavigator />
        </SafeAreaView>
      </Provider>
    );
  }
}
