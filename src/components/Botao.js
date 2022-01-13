import React from 'react';
import {Button} from 'react-native';

export default props => {
  function executar() {
    console.warn('Exec #01 !!!');
  }

  return (
    <>
      <Button
        title="Executar #01!"
        onPress={executar} //nao executa a função, apenas passa como referência para a propriedade onPress
      />
      <Button
        title="Executar #02!"
        onPress={function () {
          console.warn('Exec #02!'); //passando a função dentro do console
        }}
      />
      <Button
        title="Executar #03!"
        onPress={() => console.warn('Exec #03!')} // arrow function
      />
    </>
  );
};
