import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';
import * as helpers from '../utils/helpers';

const DECKS_STORAGE_KEY = 'MobileFlashcards:decks';
const NOTIFICATION_KEY = 'MobileFlashcards:notifications';

export function addDeck(title) {
  const deck = JSON.stringify({
    [title]: {
      questions: [],
      title,
    }
  });

  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, deck)
}

export function addQuestion(title, question, answer) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results);
      const updatedDecks = JSON.stringify(
        helpers.addQuestion(title, question, answer, decks)
      );

      return AsyncStorage.setItem(DECKS_STORAGE_KEY, updatedDecks)
    })
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => JSON.parse(results))
}

export function deleteDeck(title) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results);

      delete decks[title];

      return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
    })
}

function createNotification() {
  return {
    title: 'Study your flashcards!',
    body: 'Remember to study your flashcards today',
  }
}

function createNotificationTiming() {
  const today = new Date();
  const tomorrow = today.getDate() + 1;

  tomorrow.setHours(18);
  tomorrow.setMinutes(0);

  return {
    time: tomorrow,
    repeat: 'day'
  }
}

export function setNotifications() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then((data) => {
      const notifications = JSON.parse(data);

      if (!notifications) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              const notification = createNotification();
              const timing = createNotificationTiming();

              Notifications.cancelAllScheuledNotificationsAsync();

              Notifications.scheduleLocalNotificationAsync(notification, timing)

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          }) 
      }
    })
}

export function clearNotifications() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheuledNotificationsAsync)
}
