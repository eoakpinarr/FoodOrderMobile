import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from '../Utils/Colors'
import Feather from 'react-native-vector-icons/Feather'

const Search = () => {
    return (
        <View style={styles.container}>
            <Feather name="search" size={24} />
            <TextInput
                style={styles.inputContainer}
                placeholder='Search'
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Gray,
        height: 60,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 15,
    },
    inputContainer: {
        flex: 0.95,
        fontSize: 17,
    }

})