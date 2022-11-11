import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import img from './img/Cerdo-vietnamita-Animales-Faunia-5.jpg';

export default function ApplicationForm() {
  const [nombre, setNombre] = useState(null);
  const [apellidos, setApellidos] = useState(null);
  const [edad, setEdad] = useState(null);
  const [texto, setTexto] = useState(null);
  const [correo, setCorreo] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [imagen, setImagen] = useState();
  const [validanombre, setValidaNombre] = useState(false);
    const [validaApellidos, setValidaApellidos] = useState(false);
    const [validedad, setValidaEdad] = useState(false);
    const [validacorreo, setValidaCorreo] = useState(false);

  function validateCorreo(correo) {
    const reg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,40})+$/ ;
    if (reg.test(correo)) {
        setValidaCorreo(true);
        setCorreo(correo);
    } else {
        setValidaCorreo(false);
      
    }
  }

  
function validateNombre(nombre) {
  const reg = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  if (reg.test(nombre)) {
      setValidaNombre(true);
      setNombre(nombre)
  } else {
      setValidaNombre(false);
  }
}

function validateApellidos(apellidos) {
  const reg = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  if (reg.test(apellidos)) {
      setValidaApellidos(true);
      setApellidos(apellidos)
  } else {
      setValidaApellidos(false);
    
  }
}

function validateEdad(edad) {
  const reg =  /^[0-9]+$/;
  if (reg.test(edad)) {
      setValidaEdad(true);
      setEdad(edad);
  } else {
      setValidaEdad(false);
    
  }
}



  const decirDatos = () => {
    setTexto(
      <Text style={styles.texto}>
        Mi nombre es {nombre}, mis apellidos son {apellidos}, tengo {edad} años,
        mi correo es {correo} y soy {isEnabled ? 'mujer' : 'hombre'}
        {'.'}
      </Text>,
    );
    setImagen(<Image style={{width: 500, height: 500}} source={img} />);
  };

  return (
    <ScrollView>
      
      <View>
        <Text style={{fontSize:40,marginLeft:90,color:'#000000'}}>Formulario</Text>
        <View style={styles.recuadritos}>
          <Text style={styles.textoInput}>Nombre: </Text>
          <TextInput
            style={validanombre ? (
              { borderWidth: 2, height: 40,width: 210, borderColor: 'green' }
          ) : 
              { borderWidth: 2, height: 40,width: 210, borderColor: 'red' }}
            defaultValue=""
            keyboardType="generic"
            onChangeText={nombre => validateNombre(nombre)}
          />
        </View>

        <View style={styles.recuadritos}>
          <Text style={styles.textoInput}>Apellidos: </Text>
          <TextInput
            style={validaApellidos ? (
              { borderWidth: 2, height: 40,width: 210, borderColor: 'green' }
          ) : 
              { borderWidth: 2, height: 40,width: 210, borderColor: 'red' }
          }
            defaultValue=""
            keyboardType="generic"
            onChangeText={apellidos => validateApellidos(apellidos)
            
            }
          />
        </View>

        <View style={styles.recuadritos}>
          <Text style={styles.textoInput}>Edad: </Text>
          <TextInput
            style={validedad ? (
              { borderWidth: 2, height: 40,width: 210, borderColor: 'green' }
          ) : 
              { borderWidth: 2, height: 40,width: 210, borderColor: 'red' }}
            defaultValue=""
            keyboardType="generic"
            onChangeText={edad => validateEdad(edad)}
          />
        </View>

        <View style={styles.recuadritos}>
          <Text style={styles.textoInput}>Correo: </Text>
          <TextInput
            style={validacorreo ? (
              { borderWidth: 2, height: 40,width: 210, borderColor: 'green' }
          ) : 
              { borderWidth: 2, height: 40,width: 210, borderColor: 'red' }}
            defaultValue=""
            keyboardType="generic"
            onChangeText={correo => validateCorreo(correo)}
          />
        </View>

        <View style={styles.recuadritos}>
          <Text style={styles.textoInput}>Sexo: </Text>
          <Switch
            style={styles.switch}
            trackColor={{false: 'skyblue', true: 'pink'}}
            thumbColor={isEnabled ? 'pink' : 'skyblue'}
            onValueChange={() => setIsEnabled(previousState => !previousState)}
            value={isEnabled}
          />
        </View>

        <Button onPress={decirDatos} title={'ENVIAR'} />
        {texto}
        {imagen}
      </View>
    </ScrollView>
  );
}





const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  switch: {
    justifyContent: 'center',
  },
  textoInput:{
    fontSize: 30, 
    color: '#663300',
    width:'40%',
  },
  recuadritos:{
    flexDirection: 'row',
     margin: 20,
  }
});
