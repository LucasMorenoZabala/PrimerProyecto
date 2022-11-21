import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';

//Esto es el MAIN
export default function App() {
  const nombre = 'Lucas';
  const apellidos = 'Moreno Zabala';
  const [edad, setEdad] = useState(0);
  const [texto, setTexto] = useState(null);
  const [color, setColor] = useState(null);

  return (
    <View style={estilos.container}>
      <Text>
        Hola mi nombre es <Text style={{color: 'blue'}}>{nombre}</Text>
        <Text style={{color: 'blue'}}> {apellidos}</Text>
      </Text>

      <Text>Escriba aquí su edad</Text>
      <TextInput
        defaultValue=""
        placeholder="Edad"
        onChangeText={edad => validateEdad(edad)}
      />

      <Button onPress={decirEdad} title={'FINALIZAR'} />
      <Text style={{color: color}}>{texto}</Text>
      <Text>Gracias por rellenar el formulario</Text>
    </View>
  );

  function decirEdad() {
    if (edad < 18) {
      setTexto('Qué jóven eres');
      setColor('blue');
    } else if (edad < 19) {
      setTexto('Qué buena edad');
      setColor('red');
    } else {
      setTexto('Estás en la pubertad');
      setColor('green');
    }
  }
}

const validateEdad = texto => {
  const reg = /^[0-9]+$/;
  if (reg.test(texto)) {
    console.log('Soy un número');
  } else {
    console.log('Soy una letra');
  }
};

const estilos = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'white',
  },

  verde: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },

  rojo: {
    color: 'red',
  },

  azul: {
    color: 'blue',
  },
});