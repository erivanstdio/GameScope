import React from 'react';
import {
    Image, 
    SafeAreaView, 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import iconImg from '../../assets/icon.png';
import { Entypo } from '@expo/vector-icons';


import {Input, InputSenha} from '../components/Input';
import { ButtonScope } from '../components/ButtonScope';

export function LoginScope(){
    return(
        <SafeAreaView style={style.container}>
            <View style={style.wrapper}>
                <Image 
                source={iconImg}
                style={style.image}
                resizeMode="contain"
                >
                    
                </Image>


                <Input title={'email'}/>

                <InputSenha title={'senha'}/>

                <TouchableOpacity>
                    <Text style={style.forgot}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <View style={style.containerButton}>
                <ButtonScope title={'Login'}/>
                </View>
                <View style={style.footer}>
                    <Text style={style.naoPossui}>Ainda não possui conta?</Text>
                    
                    <TouchableOpacity>
                        <Text style={style.cadastrarAzul}> Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkPurple,
    },
    wrapper: {
        paddingHorizontal: 20,
        flex: 1,
        //extremidades não tocam a borda
        alignItems: 'center'
    },
    image:{
        alignItems:'center',
        justifyContent: 'center',
        // calcula a imagem de acordo com o Device em que ela aparece. 
        // Deve receber um resizeMode="contain" na tag, para ajustar-se
        height: Dimensions.get('window').width * 0.7
    },
    forgot:{
        marginLeft: 150,
        marginTop: -10,
        color: colors.white,
        textAlign: 'right',
        fontFamily: fonts.text
    },
    containerButton: {
        marginVertical: 100,
    },
    footer:{
        flexDirection: 'row',
    },
    naoPossui: {
        color: colors.white,
    },
    cadastrarAzul: {
        alignSelf: 'flex-end',
        color: colors.neonBlue
    }
})