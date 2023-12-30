import React from "react";
import topo from "../../../../assets/topo.png";
import { StyleSheet, Dimensions, Image } from "react-native";
import Texto from "../../../components/Texto";

const width = Dimensions.get('screen').width;

export default function Topo({titulo}) {
    return <>
        <Image source={topo} style={style.topo}></Image>
        <Texto style={style.titulo}>{titulo}</Texto>
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
})