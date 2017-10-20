import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveNewDeck } from '../utils/api'
import { NavigationActions } from 'react-navigation'
import { white, darkGreen, gray } from '../utils/colors'

class NewDeck extends Component {
  state = {
    input: ''
  }

  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }
  handleSubmit = (input) => {
    saveNewDeck(input)
    const newDeck = {
      [input]: {
        title: input,
        questions: []
      }
    }
    this.props.addDeck(newDeck)
    this.props.navigation.navigate('Deck', { deck: newDeck[input] })
  }

  render() {
    const { input } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.newDeck}>
        <Text style={styles.question}>What is the title of your new deck?</Text>
        <TextInput
          value={input}
          style={styles.input}
          onChangeText={this.handleTextChange}
          placeholder='Deck Title'
        />
        <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit(input)}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  newDeck: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  question: {
    fontSize: 35,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    padding: 10,
    backgroundColor: darkGreen,
    borderRadius: 16,
    margin: 20,
  },
  buttonText :{
    color: white,
    fontSize: 20,
  },
  input: {
    height: 44,
    width: 200,
    padding: 8,
    borderColor: gray,
    borderWidth: 1,
    margin: 50
  }
})

export default connect(null, { addDeck })(NewDeck)
