import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class CreateDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>create deck component</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
}
