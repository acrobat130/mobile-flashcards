import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDeck } from '../actions';
import Button from './Button';
import TextInputStyled from './TextInputStyled';

class CreateDeck extends Component {
  static propTypes = {
    addNewDeck: PropTypes.func.isRequired,
    navigateToDeckList: PropTypes.func.isRequired,
  }

  state = {
    title: ''
  }

  onChangeText = (text) => {
    this.setState({
      title: text,
    })
  }

  onPress = () => {
    const { addNewDeck, navigateToDeckList } = this.props;
    const { title } = this.state;

    addNewDeck(title);
    this.setState({
      title: '',
    });
    navigateToDeckList();
  }

  render() {
    const { title } = this.state;

    return (
      <View style={styles.container}>
        <Text>Enter the title of the deck you want to create.</Text>
        <TextInputStyled
          onChangeText={this.onChangeText}
          value={title}
          placeholder="Deck title"
        />
        <Button text="Create new deck" onPress={this.onPress} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
}

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    addNewDeck: (title) => dispatch(addDeck(title)),
    navigateToDeckList: () => navigation.navigate('DeckList'),
  }
}

export default connect(null, mapDispatchToProps)(CreateDeck);
