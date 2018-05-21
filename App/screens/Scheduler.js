import React from 'react'
import moment from 'moment' // 2.20.1
import { View, StyleSheet, Image, Text } from 'react-native' // 0.0.1
import { Calendar } from 'react-native-calendars' // 1.16.1
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../constants/Constants';
import { Button } from 'react-native-elements';

const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(15, 'days').format(_format)

export default class Scheduler extends React.Component {
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
    return (
      <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: "https://s3.amazonaws.com/beastfinder/beastimages/Big-Purple-Monster_Full-Size1.jpg"}} />
      </View>
      
      <View style={styles.textContainer}>
        <Text>Name</Text>
      </View>
      
      
        <Calendar
            
            // we use moment.js to give the minimum and maximum dates.
            style={{width: SCREEN_WIDTH}}
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
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
      alignItems: 'center',
    },
    imageContainer: {
      height: 60,
      padding: 10,
      marginTop: 50 
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    textContainer: {
      height: 50,
      margin: 20  
    }

  });
