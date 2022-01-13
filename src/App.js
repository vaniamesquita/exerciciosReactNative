import React from 'react';
import {View, StyleSheet} from 'react-native';
import UsuarioLogado from './components/UsuarioLogado';

// import ParImpar from './components/ParImpar';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Diferenciar from './components/Diferenciar';
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import Primeiro from './components/Primeiro';

//componente baseado em função -> funcional
export default () => (
  <View style={style.App}>

    <UsuarioLogado usuario={ {nome: 'Vania', email: 'vania@vania.com' } }/>
    <UsuarioLogado usuario={ {nome: 'Viviane', email: 'vivi@vivi.com' } }/>
    <UsuarioLogado usuario={ {nome: 'Bellinha' } }/>
    <UsuarioLogado usuario={ {email: 'isa@vania.com' } }/>
    <UsuarioLogado usuario={null}/>
    <UsuarioLogado usuario={{}}/>

    {/* 
    <Familia>
      <Membro nome = "Vania" sobrenome = "Mesquita"/>
      <Membro nome = "Viviane" sobrenome = "Mesquita"/>
    </Familia>
    <Familia>
      <Membro nome = "Ana" sobrenome = "Silva"/>
      <Membro nome = "Carlos" sobrenome = "Silva"/>
    </Familia>
    <ParImpar num={20} />
    <Diferenciar/>
    <Contador inicial={100} passo={10}/>
    <Botao/>
    <Titulo principal="Cadastro Produto"
        secundario="Tela de Cadastro do Produto"/>
    <MinMax min={3} max={94} />
    <Aleatorio min={1} max={60}/>
    <CompPadrao/>
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </View>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1, //dizer q o componente pode crescer e ocupar a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
