import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native';

export default class TextInputStyled extends Component {
  static propTypes = {
    onChangeText: PropTypes.func,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    placeholder: ''
  }

  render() {
    const { onChangeText, value, placeholder } = this.props;

    return (
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
    textAlign: 'center',
    borderRadius: 5,
    margin: 20,
  },
})
