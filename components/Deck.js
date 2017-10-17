import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import DeckInfo from './DeckInfo'
import { darkGreen, white } from '../utils/colors'
import { connect } from 'react-redux'
import { getDeck } from '../utils/api'
import { receiveDeck } from '../actions'

class Deck extends Component {
  componentDidMount () {
    getDeck('JavaScript').then(deck => {
      this.props.receiveDeck(deck)
    })
  }

  render() {
    const { deck } = this.props.navigation.state.params

    return (
      <View style={styles.deck}>
        <DeckInfo title={deck.title} cardNumber={deck.questions.length} />
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('NewQuestion')}>
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

function mapStateToProps (deck) {
  return {
    deck
  }
}

export default connect(mapStateToProps, { receiveDeck })(Deck)
