import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TEXT_TYPES} from '../constants/Constants';
import SwipeCards from 'react-native-swipe-cards';
import { setBeastType, setSelectedBeast } from '../redux/actions';
import { connect } from 'react-redux';

var customData = require('../database/BeastList.json')

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { standardTextWhite } = TEXT_TYPES;
    return (
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Text style={standardTextWhite}>{this.props.name}</Text>
        </View>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <View style={styles.cardBottom}>
          <Text style={standardTextWhite}>{this.props.description}</Text>
          <Text style={standardTextWhite}>Temperment: {this.props.temperment}</Text>
          <Text style={standardTextWhite}>Color: {this.props.color}</Text>
          <Text style={standardTextWhite}>Hairy: {this.props.hairy}</Text>
        </View>
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

 class SwipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: customData.beasts
    };
  }

  handleYup (card) {
    this.props.setSelectedBeast(card)
    const { navigate } = this.props.navigation;
    navigate('Scheduler')

  }
  handleNope (card) {
    console.log(`Nope for ${card.name}`)
  }
  handleMaybe (card) {
    console.log(`Maybe for ${card.name}`)
  }


  filterList(cards){

    var newList = cards

    var beastTemperment = this.props.beastTemperment
    var beastColor = this.props.beastColor
    var beastHairy = this.props.beastHairy

    console.log('BeastTemperment: ' + beastTemperment)
    console.log('BeastTemperment: ' + beastColor)
    console.log('BeastTemperment: ' + beastHairy)

    if(beastTemperment != 'Any'){
      newList = newList.filter(function(card){
        return card.temperment == beastTemperment;
      });
    }

    if(beastColor != 'Any'){
      newList = newList.filter(function(card){
        return card.color == beastColor;
      });
    }

    if(beastHairy != 'Any'){
      newList = newList.filter(function(card){
        return card.hairy == beastHairy;
      });
    }

    return newList
  }

  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    var filteredList = this.filterList(this.state.cards)

    console.log('FilteredListTest: ' + JSON.stringify(filteredList))

    return (
      <SwipeCards
        cards={filteredList}
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
    height: 450,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
  cardTop: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
  },
  cardBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
})

const mapStateToProps = (state) => ({
    //Course State
    beastTemperment: state.filter.beastTemperment,
    beastColor: state.filter.beastColor,
    beastHairy: state.filter.beastHairy,

});

export default connect(mapStateToProps, { setBeastType, setSelectedBeast })(SwipeCard);
