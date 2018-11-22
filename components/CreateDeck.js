import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDeck } from '../actions';

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
    navigateToDeckList();
  }

  render() {
    const { title } = this.state;

    return (
      <View style={styles.container}>
        <Text>Enter the title of the deck you want to create.</Text>
        <TextInput style={styles.textInput} onChangeText={this.onChangeText} value={title} placeholder="Deck title" />
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.buttonText}>Create new deck</Text>
        </TouchableOpacity>
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
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
    textAlign: 'center',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 7,
    margin: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    addNewDeck: (title) => dispatch(addDeck(title)),
    navigateToDeckList: () => navigation.navigate('DeckList'),
  }
}

export default connect(null, mapDispatchToProps)(CreateDeck);
