import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';

export default class Question extends Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
    onViewAnswer: PropTypes.func.isRequired,
  }

  render() {
    const { question, onViewAnswer } = this.props;

    // TODO: figure out why question is throwing a propTypes error
    return (
      <View>
        <Text>Question: {question}</Text>
        <Button text="View Answer" onPress={onViewAnswer} />
      </View>
    );
  }
}
