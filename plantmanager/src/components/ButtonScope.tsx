import { processFontFamily } from 'expo-font';
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    TouchableOpacityProps 
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';




interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function ButtonScope({ title, ...rest } : ButtonProps){
    return (
        <TouchableOpacity 
        style={styles.buttonAdvance}
        activeOpacity={0.7}
        {...rest}
        >
        
        
            <Text style={styles.buttonAdvanceText}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}


const styles = 
StyleSheet.create({
    buttonAdvance: {
        height:40,
        width:146,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: colors.blueButtons,
        borderRadius: 100
    },
    buttonAdvanceText: {
        fontSize: 20,
        color: 'white',
        fontFamily: fonts.text
    }
})
