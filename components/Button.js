import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  }

  render() {
    const { text, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
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
