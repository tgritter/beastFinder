import {SELECT_BEAST} from '../actions/types';

const INITIAL_STATE = {
  beastSelected: 'All',
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SELECT_BEAST.beastSelected: {
      return {
        ...state,
        beastSelected: action.payload
      };
    }
    default:
      return state;
  }
}