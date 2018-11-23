import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Button from './Button';

export default class Answer extends Component {
  static propTypes = {
    answer: PropTypes.string.isRequired,
    onCorrectAnswer: PropTypes.func.isRequired,
    onIncorrectAnswer: PropTypes.func.isRequired,
  }

  render() {
    const { answer, onCorrectAnswer, onIncorrectAnswer } = this.props;

    return (
      <View>
        <Text>Answer: {answer}</Text>
        <Button text="Correct" onPress={onCorrectAnswer} />
        <Button text="Incorrect" onPress={onIncorrectAnswer} />
      </View>
    );
  }
}
