import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Utils/Colors';

const Category = () => {

    const [selected, setSelected] = useState(0)

    const categories = [
        'All',
        'Burger',
        'Pizza',
        'Desserts',
        'Drinks',
        'Fruits',
        'Vegetables',
        'Beverages',
        'Other',
    ];

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => setSelected(index)}
                        activeOpacity={0.7}
                        style={styles.container}>
                        <View style={[
                            styles.categoryImageContainer,
                            { backgroundColor: selected === index ? Colors.primary : Colors.Gray }
                        ]}>
                            <Image
                                style={styles.categoryImage}
                                source={require('../Assets/burger1.png')}
                            />
                        </View>
                        <Text style={[
                            styles.text,
                            { color: selected === index ? Colors.primary : Colors.Black }
                        ]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        marginRight: 10,
    },
    categoryImageContainer: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    categoryImage: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    text: {
        color: Colors.Black,
        marginTop: 5,
        textAlign: 'center',
    }
})
export default Category