import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Question from './Question';
import Answer from './Answer';
import QuizResults from './QuizResults';

class Quiz extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired,
    navigateToDeckView: PropTypes.func.isRequired,
  }

  state = {
    correctAnswerCount: 0,
    currentQuestionIndex: 0,
    incorrectAnswerCount: 0,
    isQuestion: true,
    isQuizFinished: false,
  }

  onViewAnswer = () => {
    this.setState({
      isQuestion: false,
    })
  }

  goToNextScreen = () => {
    const { questions } = this.props;
    const { currentQuestionIndex } = this.state;
    const nextIndex = currentQuestionIndex + 1;
    const maxIndex = questions.length - 1;

    if (nextIndex <= maxIndex) {
      return this.setState({
        currentQuestionIndex: nextIndex,
      });
    }

    this.setState({
      isQuizFinished: true,
    });
  }

  onCorrectAnswer = () => {
    const { correctAnswerCount } = this.state;

    this.setState({
      correctAnswerCount: correctAnswerCount + 1,
    });

    this.goToNextScreen();
  }

  onIncorrectAnswer = () => {
    const { incorrectAnswerCount } = this.state;

    this.setState({
      incorrectAnswerCount: incorrectAnswerCount + 1,
    });

    this.goToNextScreen();
  }

  restartQuiz = () => {
    this.setState({
      correctAnswerCount: 0,
      currentQuestionIndex: 0,
      incorrectAnswerCount: 0,
      isQuestion: true,
      isQuizFinished: false,
    });
  }

  render() {
    const { questions, navigateToDeckView, title } = this.props;
    const { currentQuestionIndex, isQuestion, isQuizFinished, correctAnswerCount, incorrectAnswerCount } = this.state;
    const question = questions[currentQuestionIndex].question;
    const answer = questions[currentQuestionIndex].answer;

    if (isQuizFinished) {
      return (
        <QuizResults correctAnswerCount={correctAnswerCount} incorrectAnswerCount={incorrectAnswerCount} restartQuiz={this.restartQuiz} navigateToDeckView={() => navigateToDeckView(title)} />
      );
    }

    if (isQuestion) {
      return (
        <Question question={question} onViewAnswer={this.onViewAnswer} />
      );
    }

    return (
      <Answer answer={answer} onCorrectAnswer={this.onCorrectAnswer} onIncorrectAnswer={this.onIncorrectAnswer} />
    );
  }
}

function mapStateToProps(cardDecks, { navigation }) {
  const { title } = navigation.state.params;

  return {
    title,
    questions: cardDecks[title].questions,
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    navigateToDeckView: (title) => navigation.navigate('DeckView', { title }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
