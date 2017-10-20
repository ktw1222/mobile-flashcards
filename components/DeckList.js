import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import DeckCard from './DeckCard'

class DeckList extends Component {

  render() {
    const { decks } = this.props

    return (
      <ScrollView>
        {Object.keys(decks).map(deck => (
          <TouchableOpacity key={deck} onPress={() => this.props.navigation.navigate(
            'Deck',
            { deck: decks[deck] }
          )}>
            <DeckCard deck={deck} number={decks[deck].questions.length} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}

export default DeckList
