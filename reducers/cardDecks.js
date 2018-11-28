import { ADD_DECK_COMPLETED, ADD_QUESTION_COMPLETED, LOAD_DECKS_COMPLETED, DELETE_DECK_COMPLETED } from '../actions';
import * as helpers from '../utils/helpers';

export default function cardDecks(state = {}, action) {
  switch(action.type) {
    case ADD_DECK_COMPLETED:
      return addDeck(state, action);

    case ADD_QUESTION_COMPLETED:
      return addQuestion(state, action);

    case LOAD_DECKS_COMPLETED:
      return loadDecks(state, action);

    case DELETE_DECK_COMPLETED:
      return deleteDeck(state, action);

    default:
      return state;
  }
}

function addDeck(state, action) {
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
}

function addQuestion(state, action) {
  const { title, question, answer } = action;

  return helpers.addQuestion(title, question, answer, state);
}

function loadDecks(state, action) {
  const { decks } = action;

  return {
    ...state,
    ...decks,
  }
}

function deleteDeck(state, action) {
  const { title } = action;

  const newState = {
    ...state
  }

  delete newState[title];

  return newState;
}
