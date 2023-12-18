import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Utils/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'

const FoodItems = () => {

    const foods = [
        {
            id: 1,
            name: 'Chicken',
            price: 100,
            image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2018/02/sulu-tavuk-yemekleri.jpg'
        },
        {
            id: 2,
            name: 'Pizza',
            price: 30,
            image: 'https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/ogt/stencil-font-beef-stroganoff-2.webp',
        },
        {
            id: 3,
            name: 'Burger',
            price: 98,
            image: 'https://www.burgerking.com.tr/cmsfiles/products/double-big-king-menu.png?v=314',
        },
        {
            id: 4,
            name: 'Sandwich',
            price: 112,
            image: 'https://images.deliveryhero.io/image/fd-tr/LH/kkjs-hero.jpg?width=512&height=384&quality=45',
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Popular</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={foods}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.contentContainer}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.image }}
                        />
                        <Text style={[styles.text, { textAlign: 'center' }]}>{item.name}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceText}>${item.price}</Text>
                            <AntDesign
                                name="pluscircle"
                                color={Colors.Green}
                                size={24}
                            />
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default FoodItems

const styles = StyleSheet.create({
    container: {
        gap: 15,
    },
    text: {
        fontSize: 20,
        color: Colors.Black,
    },
    image: {
        width: 85,
        height: 85,
        borderRadius: 50,
        alignSelf: 'center'
    },
    contentContainer: {
        backgroundColor: Colors.Gray,
        height: 200,
        width: 150,
        marginRight: 20,
        borderRadius: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        gap: 10,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceText: {
        color: Colors.Yellow,
        fontWeight: 'bold',
        fontSize: 18,
    }
})