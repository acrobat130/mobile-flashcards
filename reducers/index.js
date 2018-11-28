import { combineReducers } from 'redux';
import cardDecks from './cardDecks';
import loading from './loading';

export default combineReducers({
  cardDecks,
  loading,
});
