import React from 'react';
import { StyleSheet, Text, View, Dimensions, Picker } from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT, MAIN_COLOR} from '../constants/Constants';
import { setBeastTemperment, setBeastColor, setBeastHairy } from '../redux/actions';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import Header from '../components/Header'
import BackButton from '../components/BackButton'

class BeastFilter extends React.Component {

  constructor() {
    super();
  }

  renderColorPicker(){
    return(
      <View style={styles.optionContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.standardTextBlack}>Select Color</Text>
        </View>
        <Picker
          selectedValue={this.props.beastColor}
          style={styles.picker}
          mode={'dropdown'}
          onValueChange={(itemValue, itemIndex) => this.props.setBeastColor(itemValue)}>
          <Picker.Item label="Any" value="any" />
          <Picker.Item label="Red" value="red" />
          <Picker.Item label="Blue" value="blue" />
          <Picker.Item label="Pink" value="pink" />
          <Picker.Item label="Purple" value="purple" />
          <Picker.Item label="Gold" value="gold" />
        </Picker>
      </View>
    )
  }

  renderHairyPicker(){
    return(
      <View style={styles.optionContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.standardTextBlack}>Select Hairy</Text>
        </View>
        <Picker
          selectedValue={this.props.beastHairy}
          style={styles.picker}
          mode={'dropdown'}
          itemStyle={styles.itemStyle}
          onValueChange={(itemValue, itemIndex) => this.props.setBeastHairy(itemValue)}>
          <Picker.Item label="Any" value="any" />
          <Picker.Item label="Yes" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>
      </View>
    )
  }

  renderTempermentPicker(){
    return(
      <View style={styles.optionContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.standardTextBlack}>Select Temperment</Text>
        </View>
        <Picker
          selectedValue={this.props.beastTemperment}
          style={styles.picker}
          mode={'dropdown'}
          onValueChange={(itemValue, itemIndex) => this.props.setBeastTemperment(itemValue)}>
          <Picker.Item label="Any" value="any" />
          <Picker.Item label="Friendly" value="friendly" />
          <Picker.Item label="Scary" value="scary" />
          <Picker.Item label="Timid" value="timid" />
        </Picker>
      </View>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header/>
        <BackButton navigation={this.props.navigation}/>
        <View style={styles.spacer}/>

        {this.renderColorPicker()}
        {this.renderHairyPicker()}
        {this.renderTempermentPicker()}

        <Button
          backgroundColor={MAIN_COLOR}
          icon={{name: 'sort'}}
          title='Filter Choices'
          onPress={() => navigate('Finder')}
        />
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
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 150,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#fff',
  },
  standardTextBlack: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    width: 300,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },
});

const mapStateToProps = (state) => ({
  beastTemperment: state.filter.beastTemperment,
  beastColor: state.filter.beastColor,
  beastHairy: state.filter.beastHairy,
});

export default connect(mapStateToProps, { setBeastTemperment, setBeastColor, setBeastHairy })(BeastFilter);
