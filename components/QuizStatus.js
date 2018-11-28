import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

export default class QuizStatus extends Component {
  static propTypes = {
    currentQuestionNumber: PropTypes.number.isRequired,
    questionCount: PropTypes.number.isRequired,
  }

  render() {
    const { currentQuestionNumber,  questionCount } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`Question ${currentQuestionNumber} of ${questionCount}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'teal',
    padding: 5,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  text: {
    color: 'white',
  }
});
