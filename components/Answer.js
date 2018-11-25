import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Button from './Button';
import QuizStatus from './QuizStatus';

export default class Answer extends Component {
  static propTypes = {
    answer: PropTypes.string.isRequired,
    currentQuestionNumber: PropTypes.number.isRequired,
    onCorrectAnswer: PropTypes.func.isRequired,
    onIncorrectAnswer: PropTypes.func.isRequired,
    questionCount: PropTypes.number.isRequired,
  }

  render() {
    const { answer, currentQuestionNumber, onCorrectAnswer, onIncorrectAnswer, questionCount } = this.props;

    return (
      <View>
        <QuizStatus currentQuestionNumber={currentQuestionNumber} questionCount={questionCount} />
        <Text>Answer: {answer}</Text>
        <Button text="Correct" onPress={onCorrectAnswer} />
        <Button text="Incorrect" onPress={onIncorrectAnswer} />
      </View>
    );
  }
}
