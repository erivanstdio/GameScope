import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Entypo } from '@expo/vector-icons';

{/*
interface Input extends TouchableOpacityProps {
    title: string;
}
*/}

export function Input() {
    return (
        <TextInput
            style={style.inputEmail}
            placeholder="Email"
            placeholderTextColor={colors.white}
        >
            
        </TextInput>
    )
}


export function InputSenha() {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

//  por não especificar o tipo passado no campo de parâmetros
//  o tipo é passado no estado, como string:
    const [name, setName] = useState<string>();

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!! name);
    }
    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputChange(value: string){
        setIsFilled(!! value);
        setName(value);
    }

    return (
        <View style={style.container}>
            <TextInput 
                style={style.senha}
                placeholder="Senha"
                placeholderTextColor={colors.white}
            >
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