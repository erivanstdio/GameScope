import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

export function Header(){
    return(
        <View style={style.container}>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    }
})