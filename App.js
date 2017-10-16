import React from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { getDecks } from './utils/api'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { receiveDecks } from './actions'
import Decks from './components/Decks'

const UdaciDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

AsyncStorage.setItem('UdaciCards', JSON.stringify(UdaciDecks))

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'DECKS'
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <Tabs />
        </View>
      </Provider>
    )
  }
}
