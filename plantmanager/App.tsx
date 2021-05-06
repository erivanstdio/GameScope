import React, { Fragment } from 'react';
import { Welcome } from './src/pages/Welcome';


// default é utilizado só no app, pra o React entender que esse é o index
export default function App(){
    return(
      <Welcome/>
    )
}



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