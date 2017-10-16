import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { getDecks } from '../utils/api'

class Decks extends Component {
  componentDidMount() {
    getDecks().then(decks => this.props.receiveDecks(JSON.parse(decks)))
  }

  render() {
    return (
      <View>
        <Text>
          {JSON.stringify(this.props.decks)}
        </Text>
      </View>
    )
  }
}

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps, { receiveDecks })(Decks)
