import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import Estilo from './estilo';

export default props => {
  // ou export default ({ inicial = 0, passo = 1 }) e ai não precisa chamar props.inicial, props.passo...
  const [numero, setNumero] = useState(props.inicial);

  const inc = () => {
    setNumero(numero + props.passo);
  };
  const dec = () => {
    setNumero(numero - props.passo);
  };

  return (
    <>
      <Text style={Estilo.txtG}>{numero} </Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  );
};
