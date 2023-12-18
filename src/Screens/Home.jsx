import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Utils/Colors'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Category from '../Components/Category'
import Banner from '../Components/Banner'
import FoodItems from '../Components/FoodItems'

const Home = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.containerPadding}>
                <Header />
                <Search />
                <Category />
                <Banner />
                <FoodItems />
            </SafeAreaView>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerPadding: {
        paddingHorizontal: 25,
        paddingTop: 25,
        gap: 20,
    }
})
