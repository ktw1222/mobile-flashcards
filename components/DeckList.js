import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { DeckCard } from './DeckCard'

class DeckList extends Component {
  render() {
    return (
      <View>
        <Text>{JSON.stringify(Object.keys(this.props.decks))}</Text>
      </View>
    )
  }
}

export default DeckList