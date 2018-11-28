import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    disabled: false,
  }

  render() {
    const { text, onPress, disabled } = this.props;
    const buttonStyles = [styles.button];

    if (disabled) {
      buttonStyles.push(styles['button--disabled']);
    }

    return (
      <TouchableOpacity style={buttonStyles} onPress={onPress} disabled={disabled}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 7,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  buttonText: {
    color: 'white',
  },
  'button--disabled': {
    opacity: 0.3,
  }
});
