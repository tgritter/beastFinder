import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class FilterButton extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.filterIcon}>
        <TouchableOpacity onPress={ () => navigate('Filter')}>
          <Icon
            name='sort'
            color='white'
            size={30}
            />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  filterIcon: {
    position: 'absolute',
    top: 25,
    right: 10,
    overflow: 'hidden',
  },
});
