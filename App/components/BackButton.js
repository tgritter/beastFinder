import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class BackButton extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.backIcon}>
        <TouchableOpacity onPress={ () => navigate('Finder')}>
          <Icon
            name='arrow-back'
            color='white'
            size={30}
            />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backIcon: {
    position: 'absolute',
    top: 25,
    left: 10,
    overflow: 'hidden',
  },
});
