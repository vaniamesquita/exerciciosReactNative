import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'

export default props => {
    return (
        <>
            <Text style={Estilo.txtG}>
                Lista de Produtos:
            </Text>
            {produtos.map(p => {
                return <Text key={p.id}> {p.id} - {p.nome} - R$ {p.preco} </Text>
            })}
        </>
    )
}


//também podemos fazer dessa forma:
// export default props => {
//     function obterLista() {
//         return produtos.map(p => {
//             return (
//                 <Text key={p.id}>
//                     {p.id} - {p.nome} - R$ {p.preco}
//                 </Text>
//             )
//         })
//     }
// }

// return (
//     <>
//         <Text style={Estilo.txtG}> 
//             Lista de Produtos: 
//         </Text>
//         {obertLista()}
//     </>
// )

// sempre que trabalhamos geração de varios elementos (lista de elementos), é importante usar uma chave key, que é a forma que o react tem de
// encontrar facilmente esses elementos, para a alteração por exemplo.