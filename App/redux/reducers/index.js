import { combineReducers } from 'redux';
import filter from './filter_reducer';
import select from './select_reducer';

export default combineReducers({
  filter, select
});