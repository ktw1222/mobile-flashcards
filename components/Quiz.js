import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { white, red, darkGreen } from '../utils/colors'

class Quiz extends Component {
  state = {
    answer: false,
    num: 0,
    score: 0,
    done: false
  }

  handlePress = () => {
    this.setState ({
      answer: !this.state.answer
    })
  }

  handleButtonPress = (correct) => {
    const { questions } = this.props.navigation.state.params
    this.setState ({
      num: this.state.num + 1
    })
    questions.length - this.state.num === 1 && this.setState({ done: true })
    correct === 'correct' && this.setState({ score: this.state.score + 1 })
  }

  render () {
    const { questions } = this.props.navigation.state.params
    const { answer, num, score, done } = this.state

    return (
      <View>
        {!done ?
          <View>
            <Text>{num+1}/{questions.length}</Text>
            {!answer &&
              <View>
                <Text>{questions[num].question}</Text>
                <TouchableOpacity onPress={this.handlePress}>
                  <Text style={styles.switch}>Answer</Text>
                </TouchableOpacity>
              </View>
            }

            {answer &&
              <View>
                <Text>{questions[num].answer}</Text>
                <TouchableOpacity onPress={this.handlePress}>
                  <Text style={styles.switch}>Question</Text>
                </TouchableOpacity>
              </View>
            }

            <TouchableOpacity style={styles.correctButton} onPress={() => this.handleButtonPress('correct')}>
              <Text style={styles.buttonText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.incorrectButton} onPress={this.handleButtonPress}>
              <Text style={styles.buttonText}>Incorrect</Text>
            </TouchableOpacity>
        </View>
        :<View>
          <Text>You Scored:</Text>
          <Text>{(score/questions.length) * 100}%</Text>
        </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  correctButton: {
    padding: 10,
    backgroundColor: darkGreen,
    borderRadius: 5,
    margin: 20,
  },
  incorrectButton: {
    padding: 10,
    backgroundColor: red,
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: white,
    fontSize: 20,
  },
  switch: {
    color: red,
    margin: 10
  }
})

export default Quiz
