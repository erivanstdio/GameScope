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
import { PLantCardPrimary } from '../components/PlantCardPrimary';

interface EnvironmentProps {
    key: string;
    title: string;
}

interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number;
        repeat_every: string;
    }
}

export function PlantSelect(){

    const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    //criando estado auxiliar de filtros para não puxar muitas vezes pela API
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState('all');

    
    function handleEnvironmentSelected(environment: string){
        setEnvironmentSelected(environment);
        // caso eu queira todas as plantas:
        if(environment === 'all')
        return setFilteredPlants(plants);
        
        
        const filtered = plants.filter(plant =>
            plant.environments.includes(environment)
        );

        setFilteredPlants(filtered);
    }

    useEffect(() =>{
        async function fetchEnvironment() {
            const { data } = await api.get("plants_environments?_sort=title&_order=asc");
            // após consumir os dados acima ^
            // salvar os dados no estado:
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

    useEffect(() => {
        async function fetchPlant() {
            const { data } = await api.get("plants?_sort=name&_order=asc?");
            setPlants(data);
            setFilteredPlants(data);
        }
        fetchPlant();
    }, []);

    // useEffect(() => {
    //     // EXECUTA QUANDO environments OU plants MUDAREM
    // }, [environments, plants]);
    
    // useEffect(() => {
    //     // EXECUTA UMA VEZ QUANDO O COMPONENTE É MONTADO
    // }, []);

    // useEffect(() => {
    //     // EXECUTADO TODA HORA
    // });

    // useEffect(() => {
    //     // EXECUTADO QUANDO O COMPONENTE É DESMONTADO (MORRE) 

    //     return () => {
    //         console.log('Componente morreu');
    //     }
    // }, []);

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
                        <EnvironmentButton 
                            title={item.title} 
                            active={ item.key === environmentSelected}
                            onPress={()=> handleEnvironmentSelected(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={style.environmentList}
                />
            </View>

            <View style={style.plants}>

                <FlatList
                    data={filteredPlants}
                    renderItem={({ item }) => (
                        <PLantCardPrimary 
                            data={ item }
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
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
    },
    plants:{
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    }
})