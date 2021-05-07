import content from '*.png';
import React from 'react';
import { 
    SafeAreaView, 
    StyleSheet, 
    View, 
    Text,
    TextInput
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Button } from '../components/Button';
import { ButtonScope } from '../components/ButtonScope';
import colors from '../styles/colors';
import fonts from '../styles/fonts';



export function UserIdentification(){
    return(
        <SafeAreaView style={style.container}>
            <View style={style.content}>
                
                <View style={style.form}>
                    
                    <Text style={style.emoji}>
                        🤠
                    </Text>
                    
                    <Text style={style.title}>
                        Como podemos {'\n'}
                        te chamar?
                    </Text>

                    <TextInput 
                    style={style.input}
                    placeholder="Digite um nome seu corno"
                    placeholderTextColor={colors.placeHolder}
                    />

                    <View style={style.footer}>
                        <Button title="Confirma ai doido"/>    
                    </View>

                </View>
            </View>
        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.darkPurple,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%'
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        lineHeight:32,
        color: 'white',
        fontFamily: fonts.text,
    },
    form: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 54,
        justifyContent: 'center',
    },
    emoji: {
        fontSize: 44,
    },
    input: {
    
        borderBottomWidth: 1,
        borderColor: 'gray',
        color: 'white',
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    footer: {
        marginTop: 40
    },
    placeHolder: {

    }
});
