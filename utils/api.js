import { AsyncStorage } from 'react-native'

export function getDecks() {
  return AsyncStorage.getItem('UdaciCards')
}
