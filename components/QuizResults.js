import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';

export default class QuizResults extends Component {
  static propTypes = {
    correctAnswerCount: PropTypes.number.isRequired,
    navigateToDeckView: PropTypes.func.isRequired,
    questionCount: PropTypes.number.isRequired,
    restartQuiz: PropTypes.func.isRequired,
  }

  render() {
    const { correctAnswerCount, questionCount, restartQuiz, navigateToDeckView } = this.props;

    return (
      <View>
        <Text>quiz results:</Text>
        <Text>You answered {correctAnswerCount} / {questionCount} questions correctly!</Text>
        <Button text="Restart Quiz" onPress={restartQuiz} />
        <Button text="Back to Deck" onPress={navigateToDeckView} />
      </View>
    );
  }
}
