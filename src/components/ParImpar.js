import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './estilo'


export default ({ num = 0 }) => {
    return (
        <SafeAreaView>
        <Text style={Estilo.txtG}>O resultado do número {num} é: </Text>
        {num % 2 === 0 
            ? <Text style={Estilo.txtG}>Par</Text>
            : <Text style={Estilo.txtG}>Impar</Text>
        }
        </SafeAreaView>
    )
}







// export default props =>
//   props.num % 2 === 0 ? (
//     <Text style={Estilo.txtG}>o número {props.num} é Par</Text>
//   ) : (
//     <Text style={Estilo.txtG}>o número {props.num} é Impar</Text>
//   );