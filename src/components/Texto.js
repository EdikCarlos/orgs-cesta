import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Texto({ children, style }) {
    let estilo = styles.texto

    if(style?.fontWeight === 'bold') {
        estilo = styles.textoNegrito
    }
    return <Text style={[style, estilo]}>{children}</Text>
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "MontSerratRegular",
        fontWeight: "normal"
    },
    textoNegrito: {
        fontFamily: "MontSerratBold",
        fontWeight: "normal"
    }
})