import React from 'react';

import fonts from '../styles/fonts'
import colors from '../styles/colors'

import { 
    SafeAreaView,  
    Text, 
    Image, 
    StyleSheet, 
    View,
    Dimensions
} from 'react-native';

import { Entypo, Feather } from '@expo/vector-icons'

import iconImg from '../../assets/icon.png';



export function Welcome(){
   
return(
        <SafeAreaView style={style.container}>
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

                <View style={style.setinha}>
                        <Feather 
                            style={style.setinhaText}
                            name="chevron-right"
                        />
                </View>
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