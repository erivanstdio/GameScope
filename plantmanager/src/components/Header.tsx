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
import fonts from '../styles/fonts';

export function Header(){
    return(
        <View style={style.container}>
            <View>
                <Text style={style.greeting}>Olá,</Text>
                <Text style={style.userName}>User</Text>
            </View>
            <Image source={userImg} style={style.image}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight()
    },
    greeting: {
        color: colors.text,
        fontSize: 32,
        fontFamily: fonts.text
    },
    userName:{
        color: colors.headerText,
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