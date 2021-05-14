import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import colors from '../styles/colors';

import userImg from '../../assets/profile.jpeg';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-reanimated';
import fonts from '../styles/fonts';

export function Header(){
    return(
        <View style={style.container}>
            <View>
                <Text style={style.greeting}>Olá,</Text>
                <Text style={style.userName}>Corno</Text>
            </View>
            <Image source={userImg} style={style.image}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight()
    },
    greeting: {
        color: colors.white,
        fontSize: 32,
        fontFamily: fonts.text
    },
    userName:{
        color: colors.neonBlue,
        fontSize: 32,
        fontFamily: fonts.heading,
        lineHeight: 40
    },
    image: {
        width: 70,
        height: 70,
        // dica: pra deixar a imagem redonda, coloca a metade do tamanho dela nas bordas
        borderRadius: 35
    }
})     