import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import DeckInfo from './DeckInfo'
import { darkGreen, white } from '../utils/colors'

class Deck extends Component {
  render() {
    const { deck } = this.props.navigation.state.params

    return (
      <View style={styles.deck}>
        <DeckInfo title={deck.title} cardNumber={deck.questions.length} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: darkGreen,
    borderRadius: 5,
    margin: 20,
  },
  buttonText :{
    color: white,
    fontSize: 20,
  }
})

export default Deck
