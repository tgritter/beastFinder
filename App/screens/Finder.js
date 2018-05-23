import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Header from '../components/Header'
import FilterButton from '../components/FilterButton'
import SwipeCards from '../components/SwipeCards'
import SwipeExplain from '../components/SwipeExplain'
import {SCREEN_WIDTH} from '../constants/Constants';

export default class Finder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <FilterButton navigation={this.props.navigation}/>
        <SwipeCards style={{flex: 1}} navigation={this.props.navigation}/>
        <SwipeExplain/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'black',
    width: SCREEN_WIDTH,
    height: 50,
  },
});
