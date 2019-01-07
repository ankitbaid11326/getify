import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';
import { createMaterialTopTabNavigator, createTabNavigator } from 'react-navigation';

// Components
import Repositories from '../Repositories/repositories.component';
import Stars from '../Stars/stars.component';

// get screen dimensions
let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;

// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

isIphoneX = () => {
  return (
    Platform.OS === 'ios' &&
    ((screenH === X_HEIGHT && screenW === X_WIDTH) || (screenH === X_WIDTH && screenW === X_HEIGHT))
  );
};

const TopNav = createMaterialTopTabNavigator(
  {
    Repositories: {
      screen: ({ navigation }) => <Repositories navigation={navigation} />
    },
    Stars: Stars
  },
  {
    tabBarOptions: {
      style: {
        fontSize: 24,
        fontWeight: '700',
        backgroundColor: 'rgb(37, 41, 45)'
      }
    }
  }
);

export default TopNav;
