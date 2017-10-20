import React, { Component } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity } from 'react-native'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'
import { connect } from 'react-redux'
import { white, darkGreen, gray } from '../utils/colors'

class NewQuestion extends Component {
  state = {
    question: '',
    answer: ''
  }
  handleQuestionChange = (question) => {
    this.setState(() => ({
      question
    }))
  }
  handleAnswerChange = (answer) => {
    this.setState(() => ({
      answer
    }))
  }
  handleSubmit = (card) => {
    const { title } = this.props.navigation.state.params

    addCardToDeck(title, card)
    this.props.addCard(title, card)
    this.props.navigation.goBack()
  }
  render () {
    const { question, answer } = this.state

    return (
      <KeyboardAvoidingView style={styles.newQuestionContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={question}
            onChangeText={this.handleQuestionChange}
            style={styles.input}
            placeholder='Enter Question Here'
          />
          <TextInput
            value={answer}
            onChangeText={this.handleAnswerChange}
            style={styles.input}
            placeholder='Enter Answer Here'
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit(this.state)}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: darkGreen,
    borderRadius: 16,
    margin: 30,
  },
  buttonText :{
    color: white,
    fontSize: 20,
  },
  input: {
    height: 44,
    width: 300,
    padding: 8,
    borderColor: gray,
    borderWidth: 1,
    margin: 20
  },
  newQuestionContainer: {
    alignItems: 'center'
  },
  inputContainer: {
    marginTop: 50
  },
})

export default connect(null, { addCard })(NewQuestion)
