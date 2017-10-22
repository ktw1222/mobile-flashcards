import { RECEIVE_DECKS } from './types'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}
