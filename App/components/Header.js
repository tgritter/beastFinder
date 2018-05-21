import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT, HEADER_COLOR, TEXT_TYPES} from '../constants/Constants';

export default class Header extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const { standardTextBold } = TEXT_TYPES;

    return (
      <View style={styles.header}> 
        <Text style={standardTextBold}>Beast Keeper</Text>      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    height: 60,
    backgroundColor: HEADER_COLOR,
  },
  flex: {
    flex: 1,
    marginTop: 40, 
  }
});