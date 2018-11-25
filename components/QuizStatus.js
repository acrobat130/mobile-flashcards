import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class QuizStatus extends Component {
  static propTypes = {
    currentQuestionNumber: PropTypes.number.isRequired,
    questionCount: PropTypes.number.isRequired,
  }

  render() {
    const { currentQuestionNumber,  questionCount } = this.props;

    return (
      <View>
        <Text>{`Question ${currentQuestionNumber} of ${questionCount}`}</Text>
      </View>
    );
  }
}
