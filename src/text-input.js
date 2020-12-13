import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native'

const WishInput = ({ handleAdd }) => {
    const [wish, setWish] = useState('')
    const [wishLink, setWishLink] = useState('')
    const [wishPrice, setWishPrice] = useState('')
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        if (wish.length < 5 || wishLink.length < 10 || !wishPrice.length) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }, [wish, wishLink, wishPrice])

    const resetValues = () => {
        setWish('')
        setWishLink('')
        setWishPrice('')
    }

    return (
        <View style={{ marginVertical: 40 }}>
            <TextInput
                style={styles.textInput}
                placeholder="Add you wish..."
                placeholderTextColor="#fff"
                onChangeText={text => setWish(text)}
                value={wish}
                underlineColorAndroid="white"
                inlineImageLeft='search_icon'

            />
            <TextInput
                style={[styles.textInput, { fontSize: 18 }]}
                placeholder="Add store link..."
                placeholderTextColor="#fff"
                onChangeText={text => setWishLink(text)}
                value={wishLink}
                underlineColorAndroid="white"
                inlineImageLeft='search_icon'

            />
            <TextInput
                style={[styles.textInput, { fontSize: 18 }]}
                placeholder="Add good price..."
                keyboardType="numeric"
                placeholderTextColor="#fff"
                onChangeText={text => setWishPrice(text)}
                value={wishPrice}
                underlineColorAndroid="white"
                inlineImageLeft='search_icon'

            />
            <View style={{ width: 150, alignSelf: "center" }}>
                <Button
                    title="Save Wish"
                    color="#f194ff"
                    disabled={disable}
                    onPress={() => {
                        Alert.alert('Your wish added to the list!');
                        handleAdd({
                            name: wish,
                            link: wishLink,
                            price: wishPrice,
                        })
                        resetValues()
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        padding: 8,
        color: "white",
        fontSize: 22,
        marginBottom: 10,
        alignSelf: "center",
    }
})

export default WishInput


