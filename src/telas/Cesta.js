import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png"

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image source={topo} style={style.topo}></Image>
        <Text style={style.titulo}>Detalhes da cesta</Text>
        <View style={style.cesta}>
            <Text style={style.nome}>Cesta de verduras</Text>
            <View style={style.fazendaContainer}>
                <Image source={logo} style={style.logo}></Image>
                <Text style={style.nomeFazenda}>Jenny Jack Farms</Text>
            </View>
            <Text style={style.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha.</Text>
            <Text style={style.preco}>R$ 40,00</Text>
        </View>
    </>
}


const style = StyleSheet.create({
    topo: {
        width: "100%",
        // cálculo para deixar a imagem no tamanho ideal na tela independente do celular (os 2 valores inicias são os da imagem em si)
        height: 578 / 768 * width,
    },
    titulo: {
        color: "#fff",
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 15
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontSerratBold"
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
        fontFamily: "MontSerratRegular"
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
    }
})