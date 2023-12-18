import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Utils/Colors'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Menu</Text>
            <Image
                resizeMode='contain'
                style={styles.profileImage}
                source={{
                    uri: 'https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw'
                }}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontSize: 35,
        color: Colors.Black
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    }
})