import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import reducer from './reducers';
import DeckList from './components/DeckList';
import CreateDeck from './components/CreateDeck';
import DeckView from './components/DeckView';
import CreateQuestion from './components/CreateQuestion';
import Quiz from './components/Quiz';

const store = createStore(reducer);

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
  Home: {
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
