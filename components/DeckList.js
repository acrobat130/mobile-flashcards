import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DeckList extends Component {
  static propTypes = {
    decks: PropTypes.array,
    navigateToDeckView: PropTypes.func.isRequired,
  }

  static defaultProps = {
    decks: [],
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
        <Text>{title}</Text>
        <Text>{`${questionCount} ${cardString}`}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { decks } = this.props;
    const renderedDecks = decks.map((deck) => this.renderDeck(deck));

    if (decks.length === 0) {
      return (
        <View style={[styles.container, { alignItems: 'center' }]}>
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
})

function mapStateToProps(cardDecks) {
  const decks = Object.keys(cardDecks).map((title) => {
    return cardDecks[title];
  });

  return {
    decks,
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    navigateToDeckView: (title) => navigation.navigate('DeckView', { title }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
