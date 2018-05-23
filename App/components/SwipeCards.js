import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TEXT_TYPES} from '../constants/Constants';
import SwipeCards from 'react-native-swipe-cards';
import { setBeastType, setSelectedBeast } from '../redux/actions';
import { connect } from 'react-redux';

var beastList = require('../database/BeastList.json')

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card, {backgroundColor: this.props.color, borderRadius: 10}}>
        <View style={styles.cardTop}>
          <Text style={styles.standardTextWhite}>{this.props.name}</Text>
        </View>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <View style={styles.cardBottom}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.standardTextWhite}>Description: {this.props.description}</Text>
          </View>
          <Text style={styles.standardTextWhite}>Temperment: {this.props.temperment}</Text>
          <Text style={styles.standardTextWhite}>Color: {this.props.color}</Text>
          <Text style={styles.standardTextWhite}>Hairy: {this.props.hairy}</Text>
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
      <View style={styles.container}>
        <Text style={styles.noMoreCardsText}>No more beasts</Text>
      </View>
    )
  }
}

 class SwipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: beastList.beasts
    };
  }

  handleYup (card) {
    const { navigate } = this.props.navigation;
    this.props.setSelectedBeast(card)
    navigate('Scheduler')
  }
  handleNope (card) {
    console.log(`Nope for ${card.name}`)
  }

  filterHelper(list, categoryProps, category){
    var newList = list
    if(categoryProps != 'any'){
      newList = newList.filter(function(item){
        return item[category] == categoryProps;
      });
    }
    return newList
  }

  filterList(cards){
    var newList = cards

    var newList = this.filterHelper(newList, this.props.beastTemperment, 'temperment')
    var newList = this.filterHelper(newList, this.props.beastColor, 'color')
    var newList = this.filterHelper(newList, this.props.beastHairy, 'hairy')

    return newList
  }

  render() {

    var filteredList = this.filterList(this.state.cards)

    return (
      <SwipeCards
        cards={filteredList}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        yupStyle={styles.yupStyle}
        nopeStyle={styles.nopeStyle}
        handleYup={this.handleYup.bind(this)}
        handleNope={this.handleNope}
        showMaybe={false}

      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 450,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
  yupStyle: {
    position: 'absolute',
    right: 10,
    bottom: 50,
  },
  nopeStyle: {
    position: 'absolute',
    left: 10,
    bottom: 50,
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
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3
  },
  standardTextWhite: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
})

const mapStateToProps = (state) => ({
  beastTemperment: state.filter.beastTemperment,
  beastColor: state.filter.beastColor,
  beastHairy: state.filter.beastHairy,
});

export default connect(mapStateToProps, { setBeastType, setSelectedBeast })(SwipeCard);
