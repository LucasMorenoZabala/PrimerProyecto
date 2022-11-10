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
  const [edad, setEdad] = useState(0);
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
      <View style={styles.container}>
        <TextInput
          defaultValue=""
          placeholder="Nombre"
          keyboardType="generic"
          onChangeText={nombre => setNombre(nombre)}
        />
        <TextInput
          defaultValue=""
          placeholder="Apellidos"
          keyboardType="generic"
          onChangeText={apellidos => setApellidos(apellidos)}
        />
        <TextInput
          defaultValue=""
          placeholder="Edad"
          keyboardType="numeric"
          onChangeText={edad => setEdad(edad)}
        />
        <TextInput
          defaultValue=""
          placeholder="Correo Electrónico"
          keyboardType="email-address"
          onChangeText={correo => setCorreo(correo)}
        />

        <Switch
          style={styles.switch}
          trackColor={{false: 'skyblue', true: 'pink'}}
          thumbColor={isEnabled ? 'pink' : 'skyblue'}
          onValueChange={() => setIsEnabled(previousState => !previousState)}
          value={isEnabled}
        />

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
  container: {
    marginTop: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  switch: {
    justifyContent: 'flex-end',
  },
});
