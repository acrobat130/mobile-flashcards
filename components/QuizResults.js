import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';

export default class QuizResults extends Component {
  static propTypes = {
    correctAnswerCount: PropTypes.number.isRequired,
    incorrectAnswerCount: PropTypes.number.isRequired,
    navigateToDeckView: PropTypes.func.isRequired,
    restartQuiz: PropTypes.func.isRequired,
  }

  render() {
    const { correctAnswerCount, incorrectAnswerCount, restartQuiz, navigateToDeckView } = this.props;
    const totalCount = correctAnswerCount + incorrectAnswerCount;

    return (
      <View>
        <Text>quiz results:</Text>
        <Text>You answered {correctAnswerCount} / {totalCount} questions correctly!</Text>
        <Button text="Restart Quiz" onPress={restartQuiz} />
        <Button text="Back to Deck" onPress={navigateToDeckView} />
      </View>
    );
  }
}
