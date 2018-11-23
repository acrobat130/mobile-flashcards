import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';

class DeckView extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired,
    navigateToCreateQuestion: PropTypes.func.isRequired,
    navigateToQuiz: PropTypes.func.isRequired,
  }

  onAddCardPress = () => {
    const { title, navigateToCreateQuestion } = this.props;

    navigateToCreateQuestion(title);
  }

  onStartQuizPress = () => {
    const { title, navigateToQuiz } = this.props;

    navigateToQuiz(title);
  }

  render() {
    const { title, questions } = this.props;
    const questionCount = questions.length;
    const cardString = questionCount === 1 ? 'card' : 'cards';
    const canShowQuizButton = questionCount > 0;

    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{`${questionCount} ${cardString}`}</Text>
        <Button text="Add card" onPress={this.onAddCardPress} />
        {canShowQuizButton && <Button text="Start quiz" onPress={this.onStartQuizPress} />}
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

function mapStateToProps(cardDecks, { navigation }) {
  const { title } = navigation.state.params;

  return {
    title,
    questions: cardDecks[title].questions,
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    navigateToCreateQuestion: (title) => navigation.navigate('createQuestion', { title }),
    navigateToQuiz: (title) => navigation.navigate('quiz', { title }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckView);

