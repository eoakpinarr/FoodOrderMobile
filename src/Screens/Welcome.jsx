import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../Utils/Colors'

const Welcome = ({ navigation }) => {
    return (
        <LinearGradient
            style={styles.container}
            colors={[
                Colors.primary,
                Colors.secondary,
            ]}>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../Assets/burger.png')}
                />
            </View>

            <Text style={styles.text}>
                Enjoy{'\n'}Your Food
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}
                style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    Get Started
                </Text>
            </TouchableOpacity>

        </LinearGradient>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        backgroundColor: Colors.White,
        borderRadius: 150,
        justifyContent: 'center',
        alignItems: 'center',
        top: 50,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 125,
    },
    text: {
        fontSize: 40,
        color: Colors.White,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 55,
        letterSpacing: 2.5,
        top: -15,
    },
    buttonText: {
        fontSize: 20,
        color: Colors.primary,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 30,
    },
    buttonContainer: {
        backgroundColor: Colors.White,
        width: 200,
        height: 55,
        padding: 10,
        borderRadius: 20,
    }
})