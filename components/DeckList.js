import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadDecks } from '../actions';

class DeckList extends Component {
  static propTypes = {
    decks: PropTypes.array,
    isLoading: PropTypes.bool.isRequired,
    loadDecks: PropTypes.func.isRequired,
    navigateToDeckView: PropTypes.func.isRequired,
  }

  static defaultProps = {
    decks: [],
  }

  componentDidMount = () => {
    this.props.loadDecks();
  }

  onPress = (title) => {
    const { navigateToDeckView } = this.props;

    navigateToDeckView(title);
  }

  renderDeck = (deck) => {
    const { title, questions } = deck;
    const questionCount = questions.length;
    const cardString = questionCount === 1 ? 'card' : 'cards';

    return (
      <TouchableOpacity key={title} style={styles.deck} onPress={() => this.onPress(title)}>
        <Text style={styles.title}>{title}</Text>
        <Text>{`${questionCount} ${cardString}`}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { decks, isLoading } = this.props;
    const renderedDecks = decks.map((deck) => this.renderDeck(deck));

    if (isLoading) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

    if (decks.length === 0) {
      return (
        <View style={styles.container}>
          <Text>No decks created yet.</Text>
        </View>
      );
    }

    return (
      <View style={[styles.container, { alignItems: 'stretch' }]}>
        {renderedDecks}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  deck: {
    borderRadius: 5,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 20,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
  }
})

function mapStateToProps({ cardDecks, loading }) {
  const decks = Object.keys(cardDecks).map((title) => {
    return cardDecks[title];
  });

  return {
    isLoading: loading,
    decks,
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    navigateToDeckView: (title) => navigation.navigate('DeckView', { title }),
    loadDecks: () => dispatch(loadDecks()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
