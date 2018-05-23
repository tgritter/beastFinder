import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {SCREEN_WIDTH, HEADER_COLOR} from '../constants/Constants';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.flex}>
          <Text style={styles.headerText}>Swipe Left for Next</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.headerText}>Swipe Right to Meet</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    bottom: 20,
    width: SCREEN_WIDTH,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
    marginTop: 30,
  },
  headerText: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
