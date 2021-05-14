import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../styles/colors';

import {Header} from '../components/Header';


export function PlantSelect(){
    return(
        <View style={style.container}>
            <Header/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkPurple
    },
    text: {
        color: colors.white
    }
})


