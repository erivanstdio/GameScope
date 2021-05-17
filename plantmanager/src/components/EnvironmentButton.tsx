import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors'
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps{
    title: string;
    // a interrogação "?" significa que essa propriedade não é obrigatória
    active?: boolean;
}

// ativo inicia falso, no verdadeiro ele muda para a cor ativa
export function EnvironmentButton({title, active = false, ...rest}: EnvironmentButtonProps){
    return(
        
        <RectButton
        // active tá sendo mostrado como uma condição
            style={[
                style.container, 
                active && style.containerActive
            ]}
            {...rest}
        >
            <Text style={[
                style.text, 
                active && style.textActive
            ]}>
                { title }
            </Text>
        </RectButton>

    )
}

const style = StyleSheet.create({
    container: {
        height: 40,
        width: 76,
        borderRadius: 12,
        backgroundColor: colors.grey,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    containerActive: {
        backgroundColor: colors.activeGreenBox
    },
    text: {
        color: colors.text,
        fontFamily: fonts.text
    },
    textActive:{
        color:  colors.activeGreenText,
        fontFamily: fonts.heading
    }
})