import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class Scheduler extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Schedule Meeting</Text>
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
});