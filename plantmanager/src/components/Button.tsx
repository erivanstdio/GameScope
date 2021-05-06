import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest } : ButtonProps){
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
        marginTop: -90,
        marginBottom: 20,
        height:56,
        width:200,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#0500FF',
        borderRadius: 16
    },
    buttonAdvanceText: {
        fontSize: 20,
        color: 'white'
    }
})
