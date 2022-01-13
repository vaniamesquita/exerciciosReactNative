import React from 'react';
import {Text} from 'react-native'

import Estilo from './estilo'

//desafio
//passar 2 numeros  nesse componente
//1 numero min e um num maximo e gerar de forma aleatoria
//um numero entre o valor minimo e o valor maximo e mostre na tela
//fazer um calculo em cima daquilo q recebi como parametro

export default props => {
    const { min, max } = props //desestruturação (ler algo de dentro de um obj ou arr), senão usamos props.max, props.min etc
    const aleatorio = parseInt(Math.random() * (max - min) + min)

    return  (
    <Text style={Estilo.txtG}>
        Valor aletorio gerado: {aleatorio}
    </Text>
    )
}