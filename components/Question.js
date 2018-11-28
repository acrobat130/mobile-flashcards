import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';
import QuizStatus from './QuizStatus';

export default class Question extends Component {
  static propTypes = {
    currentQuestionNumber: PropTypes.number.isRequired,
    onViewAnswer: PropTypes.func.isRequired,
    question: PropTypes.string.isRequired,
    questionCount: PropTypes.number.isRequired,
  }

  render() {
    const { question, onViewAnswer, currentQuestionNumber, questionCount } = this.props;

    return (
      <View style={styles.container}>
        <QuizStatus currentQuestionNumber={currentQuestionNumber} questionCount={questionCount} />
        <Text>Question:</Text>
        <Text>{question}</Text>
        <Button text="View Answer" onPress={onViewAnswer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
