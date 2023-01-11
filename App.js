import * as React from 'react';
import {Button, Text, View,StyleSheet, Touchable, FlatList, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


function HomeScreen(navigation){
    return(
        <View style={styles.container}>
            <Text>En esta aplicación tenemos 5 posibles destinos para tu próximo viaje. Dentro de cada uno de los destinos tenemos: una imágen de la ciudad, información sobre esa ciudad, la mejor época del año para viajar a ese destino y en que país se encuentra dicha ciudad.</Text>
        </View>
    )
}

function TripScreen({navigation}) {

    const DATA = [
        {id: 1,
            nombre: 'Sevilla',
            imagenPortada: 'https://thumbs.dreamstime.com/b/sevilla-espa%C3%B1a-81730076.jpg',
            info: ''
        },
        {id: 2,
            nombre: 'Lisboa',
            imagenPortada: 'https://images.hola.com/imagenes/viajes/20190114135645/fotos-imprescindibles-en-lisboa/0-636-166/fotos-lisboa-m.jpg?tx=w_680'
        },
        {id: 3,
            nombre: 'París',
            imagenPortada: 'https://media.istockphoto.com/id/1185953092/es/foto/la-principal-atracci%C3%B3n-de-par%C3%ADs-y-toda-europa-es-la-torre-eiffel-en-los-rayos-de-la-puesta-de.jpg?s=612x612&w=0&k=20&c=Nt1dBmjjHRh3-kUC00ITXgv6LU3pkJD40w5NWPaaySQ='
        },
        {id: 4,
            nombre: 'Lóndres',
            imagenPortada: 'https://img.freepik.com/foto-gratis/big-ben-casa-parlamento-noche-londres-reino-unido_268835-1396.jpg?w=2000'
        },
        {id: 5,
            nombre: 'Sofía',
            imagenPortada: 'https://img3.viajar.elperiodico.com/f0/3e/37/catedral-alexander-nevsky-sofia-650x424.jpg'
        }

    ]

    const printElement=({item}) => {
        return (
            
                <View>
                    <Text>{item.nombre}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('insideTrips',{item})}>
                        <Image source= {{
                            uri: {item.imagen},
                        }}/>
                    </TouchableOpacity>
                </View>
            );

        }    
         return(
            <View>
                <FlatList
                data = {DATA}
                renderItem={printElement}
                keyExtractor={item => item.id} 
                
                />
            </View>
            )

  }

function insideTrips({navigation,route}) {
  
  const {name,image} = route.params;
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> {name},{image}</Text>
      <Button onPress={() => navigation.navigate("First Page")} title={'Pasar Página'} />
      
    </View>
  );
}






const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Trips" component={TripScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 16

    }
})

export default App;