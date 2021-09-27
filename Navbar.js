import React from "react"
import { View, Text, StyleSheet } from "react-native"

export const Navbar = ({ title }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    navbar: {
        height: 85,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#D40060',
        paddingBottom: 10,


    },
    text: {
        color: 'white',
        fontSize: 20,

    },
})