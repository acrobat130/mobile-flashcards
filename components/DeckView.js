import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import { deleteDeck } from '../actions';

class DeckView extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired,
    navigateToCreateQuestion: PropTypes.func.isRequired,
    navigateToQuiz: PropTypes.func.isRequired,
    navigateToDeckList: PropTypes.func.isRequired,
    removeDeck: PropTypes.func.isRequired,
  }

  state = {
    translateX: new Animated.Value(200),
    opacity: new Animated.Value(0),
  }

  componentDidMount = () => {
    const { opacity, translateX } = this.state;

    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
    Animated.timing(translateX, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.cubic)
    }).start()
  }

  onAddCardPress = () => {
    const { title, navigateToCreateQuestion } = this.props;

    navigateToCreateQuestion(title);
  }

  onStartQuizPress = () => {
    const { title, navigateToQuiz } = this.props;

    navigateToQuiz(title);
  }

  onRemoveDeckPress = () => {
    const { title, navigateToDeckList, removeDeck } = this.props;

    removeDeck(title);
    navigateToDeckList();
  }

  render() {
    const { title, questions } = this.props;
    const { opacity, translateX } = this.state;
    const questionCount = questions.length;
    const cardString = questionCount === 1 ? 'card' : 'cards';
    const canShowQuizButton = questionCount > 0;

    return (
      <Animated.View style={[styles.container, { opacity, transform: [{ translateX }] }]}>
        <Text style={styles['text--title']}>{title}</Text>
        <Text style={styles['text--body']}>{`${questionCount} ${cardString}`}</Text>
        <Button text="Add card" onPress={this.onAddCardPress} />
        <Button text="Start quiz" onPress={this.onStartQuizPress} disabled={!canShowQuizButton} />
        <Button text="Remove deck" onPress={this.onRemoveDeckPress} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  'text--title': {
    fontSize: 30,
    margin: 5,
  },
  'text--body': {
    fontSize: 20,
    marginBottom: 20,
  },
});

function mapStateToProps({ cardDecks }, { navigation }) {
  const { title } = navigation.state.params;
  const questions = cardDecks[title] ? cardDecks[title].questions : [];

  return {
    title,
    questions,
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    navigateToCreateQuestion: (title) => navigation.navigate('createQuestion', { title }),
    navigateToQuiz: (title) => navigation.navigate('quiz', { title }),
    navigateToDeckList: () => navigation.navigate('home'),
    removeDeck: (title) => dispatch(deleteDeck(title)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckView);

