import {FILTER_TYPE} from '../actions/types';

const INITIAL_STATE = {
  beastType: 'All',
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FILTER_TYPE.beastType: {
      return {
        ...state,
        beastType: action.payload
      };
    }
    default:
      return state;
  }
}