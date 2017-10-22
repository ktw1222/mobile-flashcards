import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Decks from '../components/Decks'
import Deck from '../components/Deck'
import NewDeck from '../components/NewDeck'
import NewQuestion from '../components/NewQuestion'
import Quiz from '../components/Quiz'
import { white, purple } from './colors'
import { Ionicons, Entypo } from '@expo/vector-icons'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-paper' size={30} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
      tabBarIcon: ({ tintColor }) => <Entypo name='plus' size={30} color={tintColor} />
    }
  }
},{
  navigationOptions: {
    header: null
  }, tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 50,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

export const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'DECK'
    }
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: 'ADD CARD'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'QUIZ'
    }
  }
})
