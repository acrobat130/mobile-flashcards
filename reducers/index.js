import { ADD_DECK } from '../actions';

export default function cardDecks(state = {}, action) {
  switch(action.type) {
    case ADD_DECK:
      const { title } = action;
      const newDeck = {
        questions: [],
        title,
      }
      const newState = {
        ...state,
        [title]: newDeck
      };
      return newState;

    default:
      return state;
  }
}