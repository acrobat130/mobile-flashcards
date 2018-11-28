import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import DeckList from './components/DeckList';
import CreateDeck from './components/CreateDeck';
import DeckView from './components/DeckView';
import CreateQuestion from './components/CreateQuestion';
import Quiz from './components/Quiz';
import store from './store';
import { setNotifications } from './utils/api';

const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List'
    }
  },
  NewDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
});

const DeckListNavigator = createStackNavigator({
  home: {
    screen: Tabs,
  },
  DeckView: {
    screen: DeckView,
  },
  createQuestion: {
    screen: CreateQuestion,
  },
  quiz: {
    screen: Quiz,
  }
});

export default class App extends Component {
  componentDidMount() {
    setNotifications();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <DeckListNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
