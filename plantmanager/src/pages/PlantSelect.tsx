import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList
} from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { Header } from '../components/Header';
import { EnvironmentButton } from '../components/EnvironmentButton'
import api from '../services/api';

interface EnvironmentProps {
    key: string;
    title: string;
}

export function PlantSelect(){

    const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);

    useEffect(() =>{
        async function fetchEnvironment() {
            const { data } = await api.get("plants_environments");
            setEnvironments([
                {
                    key: 'all',
                    title: 'Todos',
                },
                ...data
            ]);
        }

        fetchEnvironment();

    }, [])

    return(
        <View style={style.container}>
           
            <View style={style.header}>
                <Header />

                <Text style={style.title}>Em qual ambiente</Text>
                <Text style={style.subtitle}>você quer colocar sua planta?</Text>
            </View>


            <View>
                <FlatList
                    data={environments}
                    renderItem={({ item }) => ( 
                        <EnvironmentButton title={item.title} />
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
        backgroundColor: colors.whiteBg,
        marginTop: getStatusBarHeight()
    },
    header:{
        paddingHorizontal: 30
    },
    title: {
        fontSize: 17,
        color: colors.headerText,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },  
    subtitle: {
        fontSize: 17,
        lineHeight: 20,
        color: colors.text,
        fontFamily: fonts.text
    },
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    }

})