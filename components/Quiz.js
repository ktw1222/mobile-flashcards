import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
  ScrollView } from 'react-native'
import { white, red, darkGreen, gray, steelBlue } from '../utils/colors'
import { clearLocalNotification } from '../utils/helpers'

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
    if (questions.length - this.state.num === 1) {
      this.setState({ done: true })
      clearLocalNotification()
    }
    correct === 'correct' && this.setState({ score: this.state.score + 1 })
  }

  render () {
    const { questions } = this.props.navigation.state.params
    const { answer, num, score, done } = this.state

    return (
      <View style={styles.quizContainer}>
        {!done ?
          <ScrollView>
            <Text style={styles.numberLeft}>{num+1}/{questions.length}</Text>
            {!answer &&
              <View style={styles.textContainer}>
                <Text style={styles.mainText}>{questions[num].question}</Text>
                <TouchableOpacity style={styles.switchText} onPress={this.handlePress}>
                  <Text style={styles.switch}>Answer</Text>
                </TouchableOpacity>
              </View>
            }

            {answer &&
              <View style={styles.textContainer}>
                <Text style={styles.mainText}>{questions[num].answer}</Text>
                <TouchableOpacity onPress={this.handlePress}>
                  <Text style={styles.switch}>Question</Text>
                </TouchableOpacity>
              </View>
            }

            <View style={styles.buttons}>
              <TouchableOpacity style={styles.correctButton} onPress={() => this.handleButtonPress('correct')}>
                <Text style={styles.buttonText}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.incorrectButton} onPress={this.handleButtonPress}>
                <Text style={styles.buttonText}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        :<View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>You Scored:</Text>
          <Text style={styles.score}>{(score/questions.length) * 100}%</Text>

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Quiz', { questions })}>
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
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
    borderRadius: 16,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
  },
  incorrectButton: {
    padding: 10,
    backgroundColor: red,
    borderRadius: 16,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 50
  },
  button: {
    padding: 10,
    backgroundColor: darkGreen,
    borderRadius: 16,
    margin: 20,
  },
  buttonText: {
    color: white,
    fontSize: 20,
    textAlign: 'center',
  },
  switch: {
    color: steelBlue,
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15
  },
  scoreContainer: {
    alignItems: 'center',
    marginTop: 200
  },
  scoreText: {
    fontSize: 35,
    marginBottom: 20
  },
  score: {
    fontSize: 30,
    color: gray
  },
  quizContainer: {
    alignItems: 'center'
  },
  textContainer: {
    marginTop: 80,
    marginLeft: 20,
    marginRight: 20
  },
  mainText: {
    textAlign: 'center',
    fontSize: 50
  },
  numberLeft: {
    textAlign: 'center',
    fontSize: 30,
  },
  buttons: {
    marginTop: 100
  },
})

export default Quiz
