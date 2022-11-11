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
        <View style={styles.recuadritos}>
          <Text style={styles.textoInput}>Nombre: </Text>
          <TextInput
            style={{borderWidth: 2,minWidth:'50%'}}
            defaultValue=""
            keyboardType="generic"
            onChangeText={nombre => setNombre(nombre)}
          />
        </View>

        <View style={styles.recuadritos}>
          <Text style={styles.textoInput}>Apellidos: </Text>
          <TextInput
            style={{borderWidth: 2,minWidth:'50%'}}
            defaultValue=""
            keyboardType="generic"
            onChangeText={apellidos => setApellidos(apellidos)
            
            }
          />
        </View>

        <View style={styles.recuadritos}>
          <Text style={styles.textoInput}>Edad: </Text>
          <TextInput
            style={{borderWidth: 2,minWidth:'50%'}}
            defaultValue=""
            keyboardType="generic"
            onChangeText={edad => setEdad(edad)}
          />
        </View>

        <View style={styles.recuadritos}>
          <Text style={styles.textoInput}>Correo: </Text>
          <TextInput
            style={{borderWidth: 2, alignContent: 'center',minWidth:'50%'}}
            defaultValue=""
            keyboardType="generic"
            onChangeText={correo => setCorreo(correo)}
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

const validateLetras = texto => {
  const reg = /^[a-zA-Z ]{2,40}$/;
  if (reg.test(texto)) {
    console.log('Soy un número');
  } else {
    console.log('Soy una letra');
  }
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  switch: {
    justifyContent: 'center',
  },
  textoInput:{
    fontSize: 35, 
    color: 'brown',
    width:'50%'
  },
  recuadritos:{
    flexDirection: 'row',
     margin: 20
  }
});
