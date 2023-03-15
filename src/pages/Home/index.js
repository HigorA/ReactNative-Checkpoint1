import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { useState } from "react";
import { Audio } from 'expo-av';
import CircleSong from "../../components/CircleSong";
import { Feather } from '@expo/vector-icons'; 


function Home() {

    const sounds = [
        require('./../../../assets/ES_1.mp3'),
        require('./../../../assets/ES_2.mp3'),
        require('./../../../assets/ES_3.mp3'),
        require('./../../../assets/ES_4.mp3'),
        require('./../../../assets/ES_5.mp3'),
        require('./../../../assets/ES_6.mp3'),
        require('./../../../assets/ES_7.wav')
    ]    
    const soundObject = new Audio.Sound();
    const [valInput, setValInput] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [currentSoundIndex, setCurrentSoundIndex] = useState();

    async function play() {
        setDisabled(true);
        const vals = valInput.split('');
        
        for (const val of vals) {
            if ( val == 'a') {
                executeSong(0);
                await new Promise(resolve => setTimeout(resolve, 2000));
            } else if (val == 'b') {
                executeSong(1);
                await new Promise(resolve => setTimeout(resolve, 2000));

            } else if (val == 'c') {
                executeSong(2);
                await new Promise(resolve => setTimeout(resolve, 2000));

            } else if (val == 'd') {
                executeSong(3);
                await new Promise(resolve => setTimeout(resolve, 2000));

            } else if (val == 'e') {
                executeSong(4);
                await new Promise(resolve => setTimeout(resolve, 2000));

            } else if (val == 'f') {
                executeSong(5);
                await new Promise(resolve => setTimeout(resolve, 2000));

            } else if (val == 'g') {
                executeSong(6);
                await new Promise(resolve => setTimeout(resolve, 2000));

            }
            else {
                await new Promise(resolve => setTimeout(resolve, 7000)); 
            }
          }
          setCurrentSoundIndex(null);
          setDisabled(false);
    }

    async function executeSong(val) {
        setCurrentSoundIndex(val);
        await loadSound(val);
        await playSound();
        await unloadSound();
    }

    async function loadSound(i) {
        try {
            await soundObject.loadAsync(sounds[i]);
            console.log("Som carregado! ");
        } catch (error) {
            console.log(error);
        }
    };

    async function playSound() {
        try {
            await soundObject.playAsync();
            console.log("Som reproduzido!");
        } catch (error) {
            console.log(error);
        }
    };

    async function unloadSound() {
        try {
            await soundObject.unloadAsync();
            console.log("Som descarregado!");
        } catch (error) {
            console.log(error);
        }
    };

    function reset() {
        setValInput('')
    };


    return (
        <View style={style.container}>
            <View style={style.sounds} >
                {sounds.map((key, index) => <View key={key} index={index} style={style.sound}>
                    <CircleSong/>
                    {currentSoundIndex == index ? 
                        <Feather name="circle" size={24} color="black"/> : null}
                </View> )}
            </View>
        
            <TextInput placeholder="Informe o som a ser tocado: a,b,c,d,e,f,g" 
                style={style.entry}
                keyboardType={'numeric'}
                value={valInput}
                onChangeText={newText => setValInput(newText.replace(' ', ''))} 
            />

            <Pressable 
                onPress={play}
                disabled={disabled}
                style={[style.button, disabled && style.disabledButton]} 
            >
                <Text style={style.font}>Submit</Text>
            </Pressable>

            <Pressable 
                onPress={reset}  
                disabled={disabled}
                style={[style.button, disabled && style.disabledButton]} 
            >
                <Text style={style.font}>Reset</Text>
            </Pressable>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#424243',
    },
    
    entry: {
        padding: 10,
        marginVertical: 20,
        width: wp('75'),
        borderColor: 'black',
        borderWidth: 1,
        
    },

    button: {
        width: wp('75%'),
        padding: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: 'black',
        marginVertical: 10,
        opacity: 1,
    },

    disabledButton: {
        opacity: 0.5,
    },

    sounds: {
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('60%'),
        
    },

    sound: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    font: {
        color: "#FFF",
        fontWeight: 'bold',
    },

    currentSoundIndex: {
        borderColor: 'yellow',
        backgroundColor: 'red',
    }
})

export default Home;