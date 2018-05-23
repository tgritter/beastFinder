import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {SCREEN_WIDTH, MAIN_COLOR} from '../constants/Constants';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.flex}>
          <Text style={styles.headerText}>Beast Keeper</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    width: SCREEN_WIDTH,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MAIN_COLOR,
  },
  flex: {
    flex: 1,
    marginTop: 30,
  },
  headerText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
