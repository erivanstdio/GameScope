import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Entypo } from '@expo/vector-icons';


interface Input extends TouchableOpacityProps {
    title: string;
}


export function Input({ title, ...rest }: Input) {
    return (
        <TextInput
            style={style.inputEmail}
        >
            {title}
        </TextInput>
    )
}

export function InputSenha({ title, ...rest }: Input) {
    return (
        <View style={style.container}>
            <TextInput style={style.senha}>
                {title}
            </TextInput>

            <Entypo
                name="eye"
                size={24}
                color={colors.white}
            />

        </View>
    )
}



const style = StyleSheet.create({
    inputEmail: {
        margin: 15,
        paddingHorizontal: 20,
        fontSize: 14,
        textAlign: 'left',
        paddingVertical: 10,
        width: '86%',
        color: colors.white,
        opacity: 0.5,
        borderWidth: 0.3,
        borderRadius: 100,
        borderColor: colors.placeHolder,
        fontFamily: fonts.text,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '85%',
        flexDirection: 'row',
        margin: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 14,
        color: colors.white,
        opacity: 0.5,
        borderWidth: 0.3,
        borderRadius: 100,
        borderColor: colors.placeHolder,
        fontFamily: fonts.text,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    senha: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        color: 'white',
    },
    eye: {
        borderColor: 'red',
        borderWidth: 1
    }
})