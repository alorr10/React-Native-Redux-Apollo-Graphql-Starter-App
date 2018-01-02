import React from 'react'
import { Text, View, Button } from 'react-native'

const DecreaseCounter = ({ count, decrementCounter }) => (
  <View style={styles.container}>
    <Text> {count} </Text>
    <Button
      title="Go down"
      onPress={() => decrementCounter(count - 1)}
    />
  </View>
);

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
}


export default DecreaseCounter
