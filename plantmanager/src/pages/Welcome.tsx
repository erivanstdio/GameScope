import React from 'react';
import { 
    SafeAreaView,  
    Text, 
    Image, 
    StyleSheet, 
    View,
    Dimensions,
    Touchable
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import fonts from '../styles/fonts';
import colors from '../styles/colors';



import { Feather } from '@expo/vector-icons';
import iconImg from '../../assets/icon.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LoginScope } from './LoginScope';



export function Welcome(){

    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification');
    }

    function handleLoginScope(){
        navigation.navigate('LoginScope');
    }

    return(
        <SafeAreaView style={style.container}>
            <TouchableOpacity onPress={handleLoginScope} style={style.botaoHome}>
                <Text>{'<'}</Text>
            </TouchableOpacity>
            <View style={style.wrapper}>
                <Text style={style.title}>
                    Bem vindo!    
                </Text>


                <Image 
                    style={style.image} 
                    source={iconImg}
                    resizeMode='contain'
                /> 


                <Text style={style.subtitle}>
                    Clique abaixo {'\n'} para visitar ofertas!
                </Text>

                <TouchableOpacity 
                style={style.setinha} 
                onPress={handleStart}
                >
                    <Feather 
                        style={style.setinhaText}
                        name="chevron-right"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const style = 
StyleSheet.create({

    container: {
        backgroundColor: colors.darkPurple,
        flex: 1,
    },
    wrapper: {
        paddingHorizontal: 20,
        flex: 1,
        //extremidades não tocam a borda
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    botaoHome:{
        backgroundColor: 'red',
        width: 50,
        height: 50,
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 1
    },
    image:{
        marginTop: -50,
        marginBottom: -50,
        // calcula a imagem de acordo com o Device em que ela aparece. 
        // Deve receber um resizeMode="contain" na tag, para ajustar-se
        height: Dimensions.get('window').width * 0.7
    },

    title: {
        marginTop:120,
        fontFamily: fonts.heading,
        color: 'white',
        fontSize: 30,
    },

    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        marginBottom: 30,
    },
    setinha:{
        marginBottom: 80,
        height:56,
        width:56,
        backgroundColor: colors.neonBlue,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems:'center',
    },

    setinhaText:{
        color: 'white',
        fontSize: 24,
    }

})