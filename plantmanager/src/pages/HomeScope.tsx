import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import { Card } from '../components/Card';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function HomeScope(){
    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkPurple
    }
})