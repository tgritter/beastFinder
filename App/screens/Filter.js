import React from 'react';
import { StyleSheet, Text, View, Dimensions, Picker } from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../constants/Constants';
import { setBeastTemperment, setBeastColor, setBeastHairy } from '../redux/actions';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import Header from '../components/Header'
import BackButton from '../components/BackButton'

class BeastFilter extends React.Component {

  constructor() {
    super();
    this.state = {
      language: "java",
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header/>
        <BackButton navigation={this.props.navigation}/>
        <View style={styles.spacer}/>

        <View style={styles.optionContainer}>
          <View style={styles.textContainer}>
            <Text>Select Temperment</Text>
          </View>
          <Picker
            selectedValue={this.props.beastTemperment}
            style={styles.picker}
            mode={'dropdown'}
            onValueChange={(itemValue, itemIndex) => this.props.setBeastTemperment(itemValue)}>
            <Picker.Item label="Any" value="Any" />
            <Picker.Item label="Friendly" value="Friendly" />
            <Picker.Item label="Scary" value="Scary" />
            <Picker.Item label="Timid" value="Timid" />
          </Picker>
        </View>

        <View style={styles.optionContainer}>
          <View style={styles.textContainer}>
            <Text>Select Color</Text>
          </View>
          <Picker
            selectedValue={this.props.beastColor}
            style={styles.picker}
            mode={'dropdown'}
            onValueChange={(itemValue, itemIndex) => this.props.setBeastColor(itemValue)}>
            <Picker.Item label="Any" value="Any" />
            <Picker.Item label="Red" value="Red" />
            <Picker.Item label="Blue" value="Blue" />
            <Picker.Item label="Pink" value="Pink" />
            <Picker.Item label="Purple" value="Purple" />
            <Picker.Item label="Yellow" value="Yellow" />
          </Picker>
        </View>

        <View style={styles.optionContainer}>
          <View style={styles.textContainer}>
            <Text>Select Hairy</Text>
          </View>
          <Picker
            selectedValue={this.props.beastHairy}
            style={styles.picker}
            mode={'dropdown'}
            onValueChange={(itemValue, itemIndex) => this.props.setBeastHairy(itemValue)}>
            <Picker.Item label="Any" value="Any" />
            <Picker.Item label="Hairy" value="Yes" />
            <Picker.Item label="Not Hairy" value="No" />
          </Picker>
        </View>

        <Button
          large
          title='Filter Choices'
          onPress={() => navigate('Finder')}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  spacer: {
    height: 70,
  },
  picker: {
    width: 130,
    height: 50,
  },
  optionContainer: {
    width: SCREEN_WIDTH - 50,
    height: 60,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => ({
    //Course State
    beastTemperment: state.filter.beastTemperment,
    beastColor: state.filter.beastColor,
    beastHairy: state.filter.beastHairy,

});

export default connect(mapStateToProps, { setBeastTemperment, setBeastColor, setBeastHairy })(BeastFilter);
