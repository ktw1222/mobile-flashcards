import React, { Component } from 'react'
import { View, Text } from 'react-native'
import DeckInfo from './DeckInfo'

class Deck extends Component {
  render() {

    return (
      <View>
        <DeckInfo />
        <TouchableOpacity>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Deck
