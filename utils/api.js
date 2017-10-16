import { AsyncStorage } from 'react-native'

export function getDecks() {
  return AsyncStorage.getItem('UdaciCards')
}

export function getDeck (id) {
  return AsyncStorage.getItem('UdaciCards', id)
}

export function saveNewDeck(title) {
  return AsyncStorage.getItem('UdaciCards')
    .then(results => {
      const data = JSON.parse(results)
      data[title] = {
        title,
        questions: []
      }

      AsyncStorage.getItem('UdaciCards', JSON.stringify(data))
    })
}
