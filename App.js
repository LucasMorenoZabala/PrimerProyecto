import React, {useState} from "react";
import {Button, Text,Image,TextInput, View } from "react-native";


 /*function ShowName(){
  return();
 }*/




const Human = (props) => {
  return(
    <View>
      <Text>Hola, soy {props.nombre}</Text>
    </View>
  )
}

// sirve para setear una variable
//const [name, setName] = useState(null);
 

//Esto es el MAIN
export default function App(){
  const nombre ="Lucas";


 /* return(
    <View>
      <Text>Hola, me llamo Andres la gordita</Text>
      <TextInput style={{
        height: 45,
        borderColor: 'black',
        borderWidth: 1
      }}
      defaultValue = "Escribe tu nombre aquí!"
      />
  
    </View>
  )

  //Esto es como un metodo              //variable
                       const metodoNombre = (nombre2,apellido) => {
    return nombre2 + " " + apellido;

  }*/


  const [contar, setContar] = useState(0);
  return(
    <View>
      <Button
        onPress = {() => 
        setContar(contar+1)
        
        }
        title={"Contador"}
      />
      <Text>Cada vez que pulso sumo 1 y llevo: {contar}</Text>
    </View>
  )




//A partir de aqui se pinta por pantalla
  return(<Text>Hola {metodoNombre("Lucas","Moreno Zabala")}</Text>);

  
 
  
}




