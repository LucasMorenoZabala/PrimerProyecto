import React from "react";
import { Text,View,StyleSheet } from "react-native";


function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          En esta aplicación tenemos 5 posibles destinos para tu próximo viaje.
          Dentro de cada uno de los destinos tenemos: una imágen de la ciudad,
          información sobre esa ciudad, la mejor época del año para viajar a ese
          destino y en que país se encuentra dicha ciudad.
        </Text>
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#008080'
    },
    textStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      textDecorationLine: 'underline',
      textShadowRadius: 5

    }
  });

  export default HomeScreen;