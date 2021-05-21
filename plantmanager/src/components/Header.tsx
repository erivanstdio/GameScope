import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
    Image, StyleSheet,
    Text,
    View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import userImg from '../../assets/profile.jpeg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Header(){
    const [userName, setUserName] = useState<string>();

    useEffect (() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            // se tiver algo armazenado no user, coloca o que tá armazenado
            // senão, vai uma string em branco
            setUserName(user || '');          
            
            // mas por ter sido feita a validação, sempre terá algo lá...
        }
        loadStorageUserName();
    }, []);

    return(
        <View style={style.container}>
            <View>
                <Text style={style.greeting}>Olá,</Text>
                <Text style={style.userName}>{userName}</Text>
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