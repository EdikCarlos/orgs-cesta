import React from "react";
import { View, StyleSheet, Image, TouchableOpacity} from "react-native"

import Texto from "../../../components/Texto";

export default function Detalhes({nome, logoFazenda, fazenda, descricao, preco, botao }){
    return <>
        <Texto style={styles.nome}>{nome}</Texto>
        <View style={styles.fazendaContainer}>
            <Image source={logoFazenda} style={styles.logo}></Image>
            <Texto style={styles.nomeFazenda}>{fazenda}</Texto>
        </View>
        <Texto style={styles.descricao}>{descricao}</Texto>
        <Texto style={styles.preco}>{preco}</Texto>
        <TouchableOpacity style={styles.botao}>
            <Texto style={styles.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },
    fazendaContainer: {
        flexDirection: "row",
        paddingVertical: 12
    },
    logo: {
        width: 32,
        height: 32,
        marginRight: 12
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})