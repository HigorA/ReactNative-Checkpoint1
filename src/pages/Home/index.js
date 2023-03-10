import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import CircleSong from "../../components/CircleSong";

function Home() {
    return (
        <View style={style.container}>
            <Text>Olá</Text>
            <CircleSong/>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: 400,
        backgroundColor: 'red',
    },
})

export default Home;