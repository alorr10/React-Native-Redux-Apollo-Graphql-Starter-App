import { Platform, Dimensions } from 'react-native'

export const ios = Platform.OS === 'ios'

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height