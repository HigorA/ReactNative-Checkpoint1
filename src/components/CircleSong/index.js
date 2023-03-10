import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

function CircleSong() {
    return (
        <View style={style.circle}>
        </View>
    );
}

const style = StyleSheet.create({
    circle: {
        
        width: 50,
        height:50,
        borderWidth:2,
        borderRadius:Math.round(Dimensions.get('window').width + Dimensions.get('window').height)/2,
        borderColor:'red',
        backgroundColor: 'green',
    },
  }
);

export default CircleSong;