import React, { Component } from 'react'
import { View, Text } from 'react-native'

class DeckInfo extends Component {
  render() {
    const { title,cardNumber } = this.props

    return(
      <View>
        <Text>{title}</Text>
        <Text>{cardNumber} cards</Text>
      </View>
    )
  }
}

export default DeckInfo
