import React from 'react';

import { 
    SafeAreaView,  
    Text, 
    Image, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';


import iconImg from '../../assets/icon.png';
import { Button } from '../components/Button';



export function Welcome(){

{/*
    //esse nome é só convenção
// função que armazena o estado e função que atualiza esse estado
    const [visible, setVisible] = useState(false);

    function handleVisibility (){
        setVisible(true);
    }
*/}
   
return(
        <SafeAreaView style={style.container}>
            <Text style={style.title}>
            Bem vindi!    
            </Text>


            <Image 
            style={style.image} 
            source={iconImg}
            /> 

            {/*{ 
            visible &&
            <Image 
            style={style.image} 
            source={iconImg}/> 
            }*/}

            <Text style={style.subtitle}>
                Clique abaixo {'\n'} para visitar ofertas!
            </Text>
{/*          
            <TouchableOpacity style={style.button}>
            
            <Text style={style.buttonText}>
            {'>'}
            </Text>
        
            </TouchableOpacity>
*/}

{/*
            <Button title="Mostrar imagem" 
            onPress={handleVisibility}/>
*/}

            <Button title="Seguinte"/>

            </SafeAreaView>
    )
}

const style = 
StyleSheet.create({

    container: {
        backgroundColor: '#1C082B',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    image:{
        height: 150,
        width: 150
    },

    title: {
        marginTop:120,
        color: 'white',
        fontSize: 30,
    },

    subtitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },

    buttonText:{
        color: 'white',
        fontSize: 24

    },
    button:{
        marginBottom: 80,
        height:56,
        width:56,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#0500FF',
        borderRadius: 16
    }
})