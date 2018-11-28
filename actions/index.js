import * as api from '../utils/api';

export const ADD_DECK_COMPLETED = 'ADD_DECK_COMPLETED';
export const ADD_QUESTION_COMPLETED = 'ADD_QUESTION_COMPLETED';
export const LOAD_DECKS_COMPLETED = 'LOAD_DECKS_COMPLETED';
export const LOADING_DECKS = 'LOADING_DECKS';
export const DELETE_DECK_COMPLETED = 'DELETE_DECK_COMPLETED';

function addDeckCompleted(title) {
  return {
    type: ADD_DECK_COMPLETED,
    title,
  }
}

function addQuestionCompleted(title, question, answer) {
  return {
    type: ADD_QUESTION_COMPLETED,
    title,
    question,
    answer,
  }
}

function loadDecksCompleted(decks) {
  return {
    type: LOAD_DECKS_COMPLETED,
    decks,
  }
}

function loadingDecks() {
  return {
    type: LOADING_DECKS,
  }
}

function deleteDeckCompleted(title) {
  return {
    type: DELETE_DECK_COMPLETED,
    title,
  }
}

export function addDeck(title) {
  return (dispatch) => {
    return api.addDeck(title)
      .then(() => {
        dispatch(addDeckCompleted(title));
      })
  }
}

export function addQuestion(title, question, answer) {
  return (dispatch) => {
    return api.addQuestion(title, question, answer)
      .then(() => {
        dispatch(addQuestionCompleted(title, question, answer));
      })
  }
}

export function loadDecks() {
  return (dispatch) => {
    dispatch(loadingDecks());

    return api.getDecks()
      .then((decks) => {
        dispatch(loadDecksCompleted(decks))
      })
  }
}

export function deleteDeck(title) {
  return (dispatch) => {
    return api.deleteDeck(title)
      .then(() => {
        dispatch(deleteDeckCompleted(title));
      })
  }
}
