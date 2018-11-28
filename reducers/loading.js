import { LOADING_DECKS, LOAD_DECKS_COMPLETED } from '../actions';

export default function loading(state = false, action) {
  switch(action.type) {
    case LOADING_DECKS:
      return true;

    case LOAD_DECKS_COMPLETED:
      return false;

    default:
      return state;
  }
}

