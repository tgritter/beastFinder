import React from 'react'
import moment from 'moment' // 2.20.1
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native' // 0.0.1
import { Calendar } from 'react-native-calendars' // 1.16.1
import {SCREEN_WIDTH, SCREEN_HEIGHT, TEXT_TYPES} from '../constants/Constants';
import { Button } from 'react-native-elements';
import Header from '../components/Header'
import { connect } from 'react-redux';
import BackButton from '../components/BackButton'

const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(15, 'days').format(_format)

class Scheduler extends React.Component {
  // It is not possible to select some to current day.
  initialState = {
      [_today]: {selected: true}
  }

  constructor() {
    super();

    this.state = {
      _markedDates: this.initialState,
      _markedDay: _today
    }
  }

  onDaySelect = (day) => {
      const _selectedDay = moment(day.dateString).format(_format);
      const _markedDay= this.state._markedDay

      let marked = true;
      let markedFalse = false

      let markedSelectedCheck = false;
      if (this.state._markedDates[_selectedDay]) {
          // Already in marked dates, so reverse current marked state
        markedSelectedCheck = this.state._markedDates[_selectedDay].marked;
      }

      let markedDayCheck = false;
      if (this.state._markedDates[_markedDay]) {
          // Already in marked dates, so reverse current marked state
        markedDayCheck = this.state._markedDates[_markedDay].marked;
      }

      // Create a new object using object property spread since it should be immutable
      // Reading: https://davidwalsh.name/merge-objects
      const updatedMarkedDates = {...this.state._markedDates, ...{ [_selectedDay]: { selected: marked, marked: markedSelectedCheck }, [_markedDay]: { selected: markedFalse, marked: markedDayCheck } } }

      // Triggers component to render again, picking up the new state
      this.setState({
        _markedDates: updatedMarkedDates,
        _markedDay: _selectedDay
      });
  }

  scheduleAppointment = () => {
    const _markedDay= this.state._markedDay

    let trueString = true
    let markedDayCheck = true;
    if (this.state._markedDates[_markedDay]) {
        // Already in marked dates, so reverse current marked state
      markedDayCheck = !this.state._markedDates[_markedDay].marked;
    }

    // Create a new object using object property spread since it should be immutable
    // Reading: https://davidwalsh.name/merge-objects
    const updatedMarkedDates = {...this.state._markedDates, ...{ [_markedDay]: { marked: markedDayCheck, selected: trueString } } }

    // Triggers component to render again, picking up the new state
    this.setState({
      _markedDates: updatedMarkedDates,
    });
  }

  render() {

    const { standardTextBlack } = TEXT_TYPES;
    return (
      <View style={styles.container}>
        <Header/>
        <BackButton navigation={this.props.navigation}/>
        <ScrollView style={styles.scrollViewContainer}>

        <View style={styles.container}>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: this.props.beastSelected.image}} />
        </View>

        <View style={styles.textContainer}>
          <Text style={standardTextBlack}>Name: {this.props.beastSelected.name}</Text>
        </View>

        <View style={styles.textContainer2}>
          <Text style={standardTextBlack}>Description: {this.props.beastSelected.description}</Text>
        </View>
        <View style={styles.textContainer2}>
          <Text style={standardTextBlack}>Temperment: {this.props.beastSelected.temperment}</Text>
        </View>
        <View style={styles.textContainer2}>
          <Text style={standardTextBlack}>Color: {this.props.beastSelected.color}</Text>
        </View>
        <View style={styles.textContainer2}>
          <Text style={standardTextBlack}>Hairy: {this.props.beastSelected.hairy}</Text>
        </View>

        <View style={styles.line}/>

        <View style={styles.textContainer3}>
          <Text style={standardTextBlack}>Book Appointment</Text>
        </View>

        <Calendar

            // we use moment.js to give the minimum and maximum dates.
          style={{width: SCREEN_WIDTH


          }}
          minDate={_today}
          maxDate={_maxDate}
              // hideArrows={true}
          onDayPress={this.onDaySelect}
          markedDates={this.state._markedDates}
        />

        <Button
          large
          title='Schedule Appointment'
          onPress={() => this.scheduleAppointment()}/>

          </View>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollViewContainer: {
    flex: 1,
    marginTop: 60,
  },
  imageContainer: {
    height: 100,
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  line: {
    width: SCREEN_WIDTH,
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingBottom: 15
  },
  textContainer: {
    flex: 1,
    padding: 5
  },
  textContainer2: {
    flex: 1,
  },
  textContainer3: {
    flex: 1,
    padding: 10
  },
});

const mapStateToProps = (state) => ({
      //Course State
  beastSelected: state.select.beastSelected,
});

export default connect(mapStateToProps)(Scheduler);
