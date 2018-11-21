import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 

class DeckList extends Component {
  static propTypes = {
    decks: PropTypes.array,
  }

  static defaultProps = {
    decks: [],
  }

  render() {
    const { decks } = this.props;

    if (decks.length === 0) {
      return (
        <View>
          <Text>No decks created yet.</Text>
        </View>
      );
    }

    return (
      <View>
        <Text>deck list component</Text>
      </View>
    );
  }
}

function mapStateToProps(cardDecks) {
  const decks = Object.keys(cardDecks).map((title) => {
    return cardDecks[title];
  });

  return {
    decks,
  }
}

export default connect(mapStateToProps)(DeckList);
