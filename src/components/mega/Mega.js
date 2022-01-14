/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {Button, Text, TextInput, View} from 'react-native'
import Estilo from '../estilo'
import MegaNumero from './MegaNumero';


//componente baseado em classe
export default class Mega extends React.Component {
  //render(): função que será chamada quando o componente precisar ser renderizado na tela
  //é a resposta dessa função que deve ser retornado em trecho de jsx

  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  alterarQtdeNumero = qtde => {
    this.setState({qtdeNumeros: +qtde});
  };

  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo; //função recursiva (chama a si mesmo)
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumeros)
        .fill()
        .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)],[])
        .sort((a,b) => a - b)
    this.setState({numeros});
  };

  exibirNumeros = () => {
      const nums = this.state.numeros
      return nums.map(n => {
          return <MegaNumero key={n} num={n}/>
      })
  }


  /* outra forma de fazer a função acima
  gerarNumeros = () => {
      const { qtdeNumeros } = this.state
      const numeros = []

      for(let i = 0; i < qtdeNumeros; i++) {
          numeros.push(this.gerarNumeroNaoContido(numeros))
      }
      numeros.sort((a,b) => a - b)
      this.setState({ numeros })
  }
  */


  render() {
    return (
      <>
        <Text style={Estilo.txtG}>Gerador de Números para Mega-Sena</Text>
        <TextInput
          keyboardType={'numeric'}
          style={{
            borderBottomWidth: 1,
            fontSize: 28,
            color: '#000'
          }}
          placeholder="qtde de números"
          value={`${this.state.qtdeNumeros}`}
          onChangeText={this.alterarQtdeNumero}
        />

        <Button 
            title="Gerar" 
            onPress={this.gerarNumeros} />

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}