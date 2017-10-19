import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import DeckInfo from './DeckInfo'
import { darkGreen, white } from '../utils/colors'
import { connect } from 'react-redux'
import { getDeck } from '../utils/api'
import { receiveDeck } from '../actions'

class Deck extends Component {
  render() {
    const { deck } = this.props

    return (
      <View style={styles.deck}>
        <DeckInfo title={deck.title} cardNumber={deck.questions.length} />
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('NewQuestion', { title: deck.title })}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Quiz', { questions: deck.questions })}>
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

function mapStateToProps (decks, props) {
  const { deck } = props.navigation.state.params

  return {
    deck: decks[deck.title]
  }
}

export default connect(mapStateToProps, { receiveDeck })(Deck)
