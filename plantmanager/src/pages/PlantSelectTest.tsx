import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../styles/colors';
import api from '../services/api';

import {Header} from '../components/Header';
import fonts from '../styles/fonts';
import { EnvironmentButton } from '../components/EnvironmentButton';


interface EnviromentProps {
    key: string;
    title: string;
}


export function PlantSelectTest(){

    // indicando o tipo que será trabalhado: "irei receber da API o tipo <EnviromentProps>"
    const [environments, setEnvironments] = useState<EnviromentProps[]>([]);


    // como não é possível atribuir o useEffect como sendo assíncrono, 
    // é criada uma função de callback assíncrona dentro do useEffect 
    useEffect(() => {
        async function fetchEnvironment() {
            // como a busca depende de vários fatores externos (internet blabla)
            // o await vai fazer aguardar a API devolver os dados
            const { data } = await api.get("/plants_environments");
            
            
            setEnvironments([
                {
                    key: 'all',
                    title: 'Todos',
                },
                ... data   

            ]);
        }

        fetchEnvironment();

    }, [])

    return(
        <View style={style.container}>

            <View style={style.header}>
                <Header/>
                <Text style={style.title}>Em qual ambiente</Text>
                <Text style={style.subtitle}>você quer colocar sua planta?</Text>
            </View>
            
        
            <View>
                <FlatList
                    data={environments}
                    renderItem={({ item }) => (
                        <EnvironmentButton 
                            title={ item.title }
                            active
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={style.environmentList}
                />
            </View>
        
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteBg
    },
    header: {
        paddingHorizontal: 30,

    },
    title: {
        fontSize: 17,
        color: colors.headerText,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.text
    },
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    }
})


