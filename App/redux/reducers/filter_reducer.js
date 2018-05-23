import {FILTER_TYPE} from '../actions/types';

const INITIAL_STATE = {
  beastTemperment: 'any',
  beastColor: 'any',
  beastHairy: 'any'
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FILTER_TYPE.beastTemperment: {
      return {
        ...state,
        beastTemperment: action.payload
      };
    }
    case FILTER_TYPE.beastColor: {
      return {
        ...state,
        beastColor: action.payload
      };
    }
    case FILTER_TYPE.beastHairy: {
      return {
        ...state,
        beastHairy: action.payload
      };
    }
    default:
      return state;
  }
}
