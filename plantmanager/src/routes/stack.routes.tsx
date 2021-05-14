import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { LoginScope } from '../pages/LoginScope';
import { HomeScope } from '../pages/HomeScope';
import { PlantSelect } from '../pages/PlantSelect';


//criando uma pilha de navegação

const stackRoutes = createStackNavigator();

// tipando o AppRoutes como sendo um Functional Component
const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >

        <stackRoutes.Screen 
        // quando chamar esse nome de tela >>>>
            name="Welcome"
        // devolva esse componente
            component={Welcome}
        />

        <stackRoutes.Screen
            name="HomeScope"
            component={HomeScope}
        />

        <stackRoutes.Screen
            name="UserIdentification"
            component={UserIdentification}
        />
            
        <stackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />

        <stackRoutes.Screen
            name="PlantSelect"
            component={PlantSelect}
        />

        <stackRoutes.Screen
            name="LoginScope"
            component={LoginScope}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;