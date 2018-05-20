import { Dimensions } from 'react-native';

//Calculate Dimensions of User's Device
export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height

//Colors
export const HEADER_COLOR = 'blue'

export const TEXT_TYPES = {
  standardTextBold: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
}