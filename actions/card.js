import { ADD_CARD } from './types'

export function addCard (title, card) {
  return {
    type: ADD_CARD,
    title,
    card
  }
}
