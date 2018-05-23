import React from 'react'
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native'
import { Calendar } from 'react-native-calendars'
import {SCREEN_WIDTH} from '../constants/Constants';

import Header from '../components/Header'
import { connect } from 'react-redux';
import BackButton from '../components/BackButton'
import { Button } from 'react-native-elements';

import moment from 'moment'
const format = 'YYYY-MM-DD'
const today = moment().format(format)
const maxDate = moment().add(60, 'days').format(format)

class Scheduler extends React.Component {
  // It is not possible to select some to current day.
  initialState = {
      [today]: {selected: true}
  }

  constructor() {
    super();
    this.state = {
      markedDates: this.initialState,
      currentDay: today
    }
  }

  onDaySelect = (day) => {
    const selectedDay = moment(day.dateString).format(format);
    const currentDay = this.state.currentDay

    let trueString = true;
    let falseString = false

    //Check if Selected Day is Selected
    let selectedDayCheck = false;
    if (this.state.markedDates[selectedDay]) {
      selectedDayCheck = this.state.markedDates[selectedDay].marked;
    }

    //Check if Current Day is Selected
    let currentDayCheck = false;
    if (this.state.markedDates[currentDay]) {
      currentDayCheck = this.state.markedDates[currentDay].marked;
    }

    //Update Selected Date to Selected
    //Updated Current Date to Unselected
    const updatedMarkedDates = {
      ...this.state.markedDates, ...{
        [selectedDay]: { selected: trueString, marked: selectedDayCheck },
        [currentDay]: { selected: falseString, marked: currentDayCheck }
      }
    }
    this.setState({
      markedDates: updatedMarkedDates,
      currentDay: selectedDay
    });
  }

  scheduleAppointment = () => {
    const currentDay = this.state.currentDay

    let trueString = true

    let markedDayCheck = true;
    if (this.state.markedDates[currentDay]) {
      markedDayCheck = !this.state.markedDates[currentDay].marked;
    }

    const updatedMarkedDates = {
      ...this.state.markedDates, ...{
        [currentDay]: { selected: trueString, marked: markedDayCheck }
      }
    }
    this.setState({
      markedDates: updatedMarkedDates,
    });
  }

  //Render Text Function for Simplification
  renderText(category, answer){
    return(
      <View style={styles.textContainerPadding}>
        <Text style={styles.standardTextBlack}>{category} {answer}</Text>
      </View>
    )
  }

  //Render Text Function for Simplification
  renderCategoriesText(category, answer){
    return(
      <View style={styles.textContainer}>
        <Text style={styles.standardTextBlack}>{category}: {answer}</Text>
      </View>
    )
  }

  //Render Text Based on Whether Appointment on Current Day
  renderButtonText(){
    var string = 'Book Appointment'
    const currentDay = this.state.currentDay
    if (this.state.markedDates[currentDay]) {
      if(this.state.markedDates[currentDay].marked){
        string = 'Cancel Appointment'
      }
    }
    return string
  }

  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <BackButton navigation={this.props.navigation}/>

        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.container}>

            {this.renderText('Name:', this.props.beastSelected.name)}
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: this.props.beastSelected.image}} />
            </View>
            {this.renderText('Description:', this.props.beastSelected.description)}

            {this.renderCategoriesText('Temperment', this.props.beastSelected.temperment)}
            {this.renderCategoriesText('Color', this.props.beastSelected.color)}
            {this.renderCategoriesText('Hairy', this.props.beastSelected.hairy)}

            <View style={styles.line}/>

            <View style={styles.textContainerPadding}>
              <Text style={styles.standardTextSmallBlack}>Book Appointment</Text>
            </View>

            <Calendar
              style={{width: SCREEN_WIDTH}}
              minDate={today}
              maxDate={maxDate}

              onDayPress={this.onDaySelect}
              markedDates={this.state.markedDates}
            />

            <View style={styles.buttonContainer}>
              <Button
                backgroundColor={'#202020'}
                title={this.renderButtonText()}
                onPress={() => this.scheduleAppointment()}
              />
            </View>

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
    backgroundColor: 'white'
  },
  textContainerPadding: {
    flex: 1,
    padding: 10
  },
  textContainer: {
    flex: 1,
  },
  standardTextBlack: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  standardTextSmallBlack: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
  imageContainer: {
    height: 100,
    margin: 5,
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
  buttonContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  beastSelected: state.select.beastSelected,
});

export default connect(mapStateToProps)(Scheduler);
