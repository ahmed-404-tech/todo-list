import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1
    }
})