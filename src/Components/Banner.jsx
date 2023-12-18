import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Utils/Colors'

const Banner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.promotionText}>Promotions</Text>
      <View style={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Today's Offer</Text>
          <Text style={[
            styles.text,
            { fontSize: 20, fontWeight: 'bold' }
          ]}>
            Free box of fries
          </Text>
          <Text style={styles.text}>on all Orders above $150</Text>
        </View>

        <Image 
        style= {styles.image}
        source={require('../Assets/kızartma.png')}
        />

      </View>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  promotionText: {
    fontSize: 20,
    color: Colors.Black,
  },
  contentContainer: {
    backgroundColor: Colors.secondary,
    height: 150,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 15,
    color: Colors.White,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }

})