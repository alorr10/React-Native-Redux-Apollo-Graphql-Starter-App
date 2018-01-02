import React from 'react'
import { Text, View, Button } from 'react-native'

const IncreaseCounter = ({ count, incrementCounter }) => (
  <View style={styles.container}>
    <Text> {count} </Text>
    <Button
      title="incrementCount"
      onPress={() => incrementCounter(count + 1)}
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


export default IncreaseCounter
