import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TEXT_TYPES} from '../constants/Constants';
import SwipeCards from 'react-native-swipe-cards';

var customData = require('../database/BeastList.json')

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { standardTextBold } = TEXT_TYPES;
    return (
      <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
        <Text style={standardTextBold}>{this.props.text}</Text>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
      </View>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: customData.beasts
    };
  }

  handleYup (card) {
    const { navigate } = this.props.navigation;
    navigate('Scheduler')
    console.log(`Yup for ${card.text}`)
  }
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }
  handleMaybe (card) {
    console.log(`Maybe for ${card.text}`)
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />} 

        handleYup={this.handleYup.bind(this)}
        handleNope={this.handleNope}
        showMaybe={false}  
        hasMaybeAction
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 350,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
})