import React, { Component } from 'react'
import { View, Text } from 'react-native'

class DeckCard extends Component {
  render() {
    const { deck, number } = this.props

    return (
      <View>
        <Text>{deck}</Text>
        <Text>{number} cards</Text>
      </View>
    )
  }
}

export default DeckCard
