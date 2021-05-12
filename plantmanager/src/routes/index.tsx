import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stack.routes'

// criando const Routes como um componente
const Routes = () => (
    //centralizando as chamadas em um container de navegação
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
)

export default Routes;