import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function ProductDetail() {
    const { id } = useLocalSearchParams()
    const imageMap: { [key: string]: any } = {
      1: require('../../assets/images/products/image1.jpg'),
      2: require('../../assets/images/products/image2.jpg'),
      3: require('../../assets/images/products/image3.jpg'),
    }
    const imageSource = imageMap[Array.isArray(id) ? id[0] : id];
    return (
    <View style={styles.container}>
      <Text>Details about Product with ID = { id } </Text>
      {imageSource ? (
        <Image source={imageSource} style={{ width: 100, height: 100 }} />
      ) : (
        <Image source={require('../../assets/images/products/default.png')} style={{ width: 100, height: 100 }} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})