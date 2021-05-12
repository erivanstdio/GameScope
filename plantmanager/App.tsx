import React, { Fragment } from 'react';
import { 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { 
  useFonts, 
  Play_400Regular, 
  Play_700Bold 
} from '@expo-google-fonts/play';
import Routes from './src/routes';  
  
import { Welcome } from './src/pages/Welcome';
import { UserIdentification } from './src/pages/UserIdentification';
import { LoginScope } from './src/pages/LoginScope';
import { Confirmation } from './src/pages/Confirmation';



// default é utilizado só no app, pra o React entender que esse é o index
export default function App(){
    const [fontsLoaded] = useFonts({
      Play_400Regular,
      Play_700Bold
    });
    
// essa função é para se as fontes não forem carregadas, retornar alguma coisa pro usuario. 
// Optar pela SplashScreen é melhor do que apresentar um texto!
// então não será utilizada essa função da forma como está comentada.
/*
    if(!fontsLoaded)
      return (
      <View style={style.loading}>
      <Text>Guenta aí... a fonte tá carregando!</Text>
      </View>
      )
*/  
    if(!fontsLoaded)
        return <AppLoading/>

    return(
      <Routes />
    )
}


const style = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

// todas as regras visuais do objeto aparecerão no tipo "style"
//    <View style={style.conteiner}></View>
/*
// objeto chamado style que recebe um estilo 
const style = 
StyleSheet.create ({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

*/