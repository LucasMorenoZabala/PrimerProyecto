import React,{useState} from "react";
import {View,Text,StyleSheet,Switch,TextInput,Button,ScrollView,Image} from "react-native";


export default function ApplicationForm(){
   const [nombre, setNombre] = useState(null);
   const [apellidos, setApellidos] = useState(null);
    const edadMia = 18;
    const [edad, setEdad] = useState(0);
    const [texto, setTexto] = useState(null);
    const [correo, setCorreo] = useState(null);
    const [isEnabled, setIsEnabled] = useState(false);



    return (
        <ScrollView>
    <View style={styles.container}>
    
          <TextInput
            defaultValue=""
            placeholder="Nombre"
            onChangeText={nombre => validateEdad(nombre)}
          />

          
            <TextInput
            defaultValue=""
            placeholder="Apellidos"
            onChangeText={apellidos => validateEdad(apellidos)}
          />

          
            <TextInput
            defaultValue=""
            placeholder="Edad"
            onChangeText={edad => validateEdad(edad)}
          />

          
            <TextInput
            defaultValue=""
            placeholder="Correo Electrónico"
            onChangeText={correo => validateCorreo(correo)}
          />



    
    <Button onPress={decirDatos}  title={'ENVIAR'} />




<Switch 

trackColor={{false:'pink',true:'skyblue'}}
thumbColor={isEnabled ? 'skyblue' : 'pink'}
onValueChange = {() => setIsEnabled(previousState => !previousState)}
value ={isEnabled}
/>

<Image
        style = {{width: 500, height: 500}}
        source ={{
            
            uri: 'https://www.proballers.com/media/cache/torso_player/ul/player/32853-3-5d289c14ca1f02.jpg'

        }}

    />



 </View>
 </ScrollView>

    

);


function decirDatos(nombre,apellidos,edad,correo) {


    const displayON = "null";
    if(displayON){
        mi nombre es {nombre}...
    }
   
setTexto({nombre});
setTexto({apellidos});
setTexto({edad});
setTexto({correo});
      
        
    

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


  const validateCorreo = texto => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(texto)) {
      console.log('Soy un número');
  
    } else {
      console.log('Soy una letra');
     
    }
  };



const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      backgroundColor: 'white',
      justifyContent: 'center',
    }
  });













