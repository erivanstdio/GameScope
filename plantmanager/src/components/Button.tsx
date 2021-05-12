import { Fontisto } from '@expo/vector-icons';
import React from 'react';
import { 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TouchableOpacityProps
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;

}

export function Button( {title, ...rest} : ButtonProps){
    return (
    <TouchableOpacity 
    
        style={style.container}
        {...rest}
    >        
        <Text style={style.botaoText}>
            {title}
        </Text>
    </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.blueButtons,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    },
    botaoText: {
        paddingHorizontal: 20,
        fontFamily: fonts.text,
        fontSize: 16,
        color: colors.white
    }

});