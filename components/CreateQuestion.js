import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextInputStyled from './TextInputStyled';
import Button from './Button';
import { addQuestion } from '../actions';

class CreateQuestion extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigateBack: PropTypes.func.isRequired,
  }

  state = {
    question: '',
    answer: '',
  }

  onChangeQuestion = (question) => {
    this.setState({ question });
  }

  onChangeAnswer = (answer) => {
    this.setState({ answer });
  }

  onSave = () => {
    const { navigateBack, addNewQuestion, title } = this.props;
    const { question, answer } = this.state;

    addNewQuestion(title, question, answer);
    navigateBack();
  }

  render() {
    const { question, answer } = this.state;

    return (
      <View style={styles.container}>
        <Text>Question:</Text>
        <TextInputStyled
          onChangeText={this.onChangeQuestion}
          value={question}
          placeholder="Question"
        />
        <Text>Answer:</Text>
        <TextInputStyled
          onChangeText={this.onChangeAnswer}
          value={answer}
          placeholder="Answer"
        />
        <Button text="Save" onPress={this.onSave} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  }
});

function mapStateToProps(cardDecks, { navigation }) {
  const { title } = navigation.state.params;

  return {
    title,
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    addNewQuestion: (title, question, answer) => dispatch(addQuestion(title, question, answer)),
    navigateBack: navigation.goBack,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
