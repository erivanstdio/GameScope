import React from 'react';
import { 
    SafeAreaView,
    StyleSheet, 
    View, 
    TextInput, 
    Text
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import {Button} from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Confirmation(){

    const navigation = useNavigation();

    function handlePlantSelect(){
        navigation.navigate("PlantSelect");
    }

    function handleUserIdentification(){
        navigation.navigate("UserIdentification");
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.content}>
                <Text style={style.emoji}>
                    🤠🍆
                </Text>

                <Text style={style.title}>
                    Prontinho!
                </Text>

                <Text style={style.subtitle}>
                    Agora vamos começar a cuidar dos 
                    seus chifres com muito cuidado.
                </Text>

                <View style={style.footer}>
                    <Button 
                        title={"Prossiga, corno"}
                        onPress={handlePlantSelect}
                    />
                </View>

                <View style={style.setinha}>
                    <Button 
                        title={"<"}
                        onPress={handleUserIdentification}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        justifyContent: 'space-around',
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.darkPurple
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20
    },
    title:{
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.white,
        lineHeight: 38,
        marginTop: 15
    },
    subtitle:{
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.white
    },
    emoji:{
        fontSize: 78
    },
    footer:{
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    },
    setinha:{
        marginTop: 50,
        marginBottom: -50
    }

})