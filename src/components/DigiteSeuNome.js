import React, {useState} from 'react'
import { TextInput, View, Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('')
    return (
        <View>
            <Text>{nome}</Text>
            <TextInput
            placeholder='Digite seu nome'
            value={nome}
            onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}

//componente controlado = so altera quando o estado altera.
//ele esta amarrado ao estado