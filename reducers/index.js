import { ADD_DECK, ADD_QUESTION } from '../actions';

export default function cardDecks(state = {}, action) {
  switch(action.type) {
    case ADD_DECK:
      return addDeck(state, action);

    case ADD_QUESTION:
      return addQuestion(state, action);

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
  const newQuestion = {
    question,
    answer,
  };
  const questions = [
    ...state[title].questions,
    newQuestion
  ];
  const newState = {
    ...state,
    [title]: {
      ...state[title],
      questions,
    }
  };

  return newState;
}
