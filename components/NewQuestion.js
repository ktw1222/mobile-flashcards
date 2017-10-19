import React, { Component } from 'react'
import {
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
    question: 'Enter Question Here',
    answer: 'Enter Answer Here'
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
      <KeyboardAvoidingView>
        <TextInput
          value={question}
          onChangeText={this.handleQuestionChange}
          style={styles.input}
        />
        <TextInput
          value={answer}
          onChangeText={this.handleAnswerChange}
          style={styles.input}
        />
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
    borderRadius: 5,
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

export default connect(null, { addCard })(NewQuestion)
