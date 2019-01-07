import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ height: 60, backgroundColor: "backgroundColor:'rgb(37, 41, 45)'," }}>
        <View
          style={{
            marginLeft: 8,
            marginRight: 8,
            marginTop: 8,
            marginBottom: 8,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Icon
              size={32}
              name="bars"
              color="#fff"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Icon size={42} name="github" color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Icon size={20} name="bell" color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
