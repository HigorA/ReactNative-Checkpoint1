import { StyleSheet, View, Dimensions } from "react-native";
import { Fontisto } from '@expo/vector-icons'; 
import React from "react";

function CircleSong() {
    return (
        <View style={style.circle} >
            <Fontisto name="music-note" size={24} color="white" />
        </View>
    );
}

const style = StyleSheet.create({
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 75,
        height:75,
        borderWidth:2,
        borderRadius:Math.round(Dimensions.get('window').width + Dimensions.get('window').height)/2,
        borderColor:'black',
        backgroundColor: 'rgba(10,10,10,0.6)',
        
    },
  }
);

export default CircleSong;