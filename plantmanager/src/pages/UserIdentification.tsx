import content from '*.png';
import React, {useState} from 'react';
import { 
    SafeAreaView, 
    StyleSheet, 
    View, 
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Colors } from 'react-native/Libraries/NewAppScreen';


import { Button } from '../components/Button';
import { ButtonScope } from '../components/ButtonScope';
import colors from '../styles/colors';
import fonts from '../styles/fonts';



export function UserIdentification(){
    
    const navigation = useNavigation();

    
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

//  por não especificar o tipo passado no campo de parâmetros
//  o tipo é passado no estado, como string:
    const [name, setName] = useState<string>();

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!! name);
    }
    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputChange(value: string){
        setIsFilled(!! value);
        setName(value);
    }



    function handleSubmition(){
        navigation.navigate("Confirmation");
    }

    function handleWelcome(){
        navigation.navigate("Welcome")
    }

    return(
        <SafeAreaView style={style.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    style={style.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >    
                    <View style={style.content}>
                        
                        <View style={style.form}>
                            
                            <Text style={style.emoji}>
                                {isFilled? '🤠' : '🍆'}
                            </Text>
                            
                            <Text style={style.title}>
                                Como podemos {'\n'}
                                te chamar?
                            </Text>

                            <TextInput 
                                style={[
                                        style.input,
                                        (isFocused || isFilled) && { borderColor: colors.neonBlue}
                                    ]}
                                placeholder="Digite um nome seu corno"
                                placeholderTextColor={colors.placeHolder}
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />

                            <View style={style.footer}>
                                <Button title="Confirma ai doido" onPress={handleSubmition}/>    
                            </View>

                            <View style={style.voltar}>
                                <Button title="<" onPress={handleWelcome}/>
                            </View>

                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>        
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
        marginTop: 20,
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
        marginTop: 40,
        paddingHorizontal: 20,
    },
    placeHolder: {

    },
    voltar: {
        marginTop: 80,
        marginBottom: -80
    }
});
