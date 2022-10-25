import React, { useState } from "react";
import { Button, Text, Image, TextInput, View, StyleSheet } from "react-native";







const estilos = StyleSheet.create({

  container: {
    marginTop: 50,
    backgroundColor: 'white'
  },

  verde: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30
  },

  rojo: {
    color: 'red'
  },

  azul: {
    color: 'blue'
  }



})

//Esto es el MAIN
export default function App() {

  const nombre = "Lucas";
  const apellidos = "Moreno Zabala"
  const [edad, setEdad] = useState(0);
  const [anos, setanos] = useState(null);
  const [color2,setcolor]= useState('brown');



  return (
    <View style={estilos.container}>
      <Text>Hola mi nombre es <Text style={{ color: 'blue' }}>{nombre}</Text>
        <Text style={{ color: 'blue' }}>{apellidos}</Text></Text>


      <Text>Escriba aquí su edad</Text>
      <TextInput
        defaultValue=""
        placeholder="Edad"
        onChangeText={edad => setEdad(edad)}
      />


      <Button
        onPress={anos => setanos(decirEdad())}
        title={"FINALIZAR"}

      />
      <Text style={{ color: color2 }} >{anos}</Text>
      <Text>Gracias por rellenar el formulario</Text>

    </View>


  )


  function decirEdad() {
    if (edad < 18) {
      setcolor('blue')
      return ('¡Qué jóven eres!' )
    } else if (edad < 19) {
      setcolor('red')
      return ('¡Qué buena edad!')
    } else {
      setcolor('green')
      return ('¡Pedazo de edad!')
    }
  }


}









