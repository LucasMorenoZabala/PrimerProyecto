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
            info: 'Con un espíritu alegre y apasionado, Sevilla es una ciudad que destaca no solo por su gran importancia artística y arquitectónica, sino por contar con una palpitante historia que aún se siente a cada paso por el corazón de su casco antiguo.',
            fechaViajar: 'Por este motivo, los mejores meses para visitarla son los meses templados en los que aún no hace demasiado calor, como abril, mayo, la primera quincena de junio e incluso septiembre y octubre. Si eres un devoto de la Semana Santa te recomendamos que visites Sevilla en abril.',
            imagen2: '',
            pais: 'España'
        },
        {id: 2,
            nombre: 'Lisboa',
            imagenPortada: 'https://images.hola.com/imagenes/viajes/20190114135645/fotos-imprescindibles-en-lisboa/0-636-166/fotos-lisboa-m.jpg?tx=w_680',
            info: 'Si sueñas con tu próximo viaje a Europa, ven a conocer Lisboa, la ciudad histórica con muchas historias que contar. Donde el sol brilla hasta 290 días al año y la temperatura raramente baja por debajo de los 15ºC. Donde uno se siente seguro paseando durante el día y saliendo de noche. Donde la gastronomía se dedica a definir más de mil formas de cocinar el adorado bacalao. Donde encontrarás hoteles y restaurantes para todos los gustos, presupuestos y criterios. Encuentra Lisboa. Una capital auténtica, donde se cruzan costumbres ancestrales e historia secular con animación cultural e innovación tecnológica: Lisboa no tiene edad, pero le encanta la compañía. Como podrás constatar en cuanto encuentres a alguien que te explique, con muchos gestos y repeticiones, el mejor local para ir a escuchar Fado. A fin de cuentas, Lisboa es famosa por su hospitalidad y por la forma familiar de recibir a sus visitantes.',
            fechaViajar: 'La mejor temporada para hacer un viaje a la ciudad de Lisboa en Portugal es la primavera, entre abril y junio, y el otoño entre septiembre y octubre, el verano sería ideal para aquellas personas que disfrutan de días enteros de sol, es decir julio y agosto.',
            imagen2: '',
            pais: 'Portugal'
        },
        {id: 3,
            nombre: 'París',
            imagenPortada: 'https://media.istockphoto.com/id/1185953092/es/foto/la-principal-atracci%C3%B3n-de-par%C3%ADs-y-toda-europa-es-la-torre-eiffel-en-los-rayos-de-la-puesta-de.jpg?s=612x612&w=0&k=20&c=Nt1dBmjjHRh3-kUC00ITXgv6LU3pkJD40w5NWPaaySQ=',
            info: 'París es la capital de Francia y constituye una de las ciudades más importantes e influyentes del mundo. Desde el punto de vista turístico, París es una de las ciudades más visitadas de Europa. Con nuestra guía de París podrás descubrir todos los secretos de la ciudad además de conseguir los mejores consejos para viajar a París ahorrando dinero.',
            fechaViajar: 'La temporada turística en París suele ser de abril a julio, setiembre y octubre; en estos meses del año es cuando vas a coincidir con más turistas visitando la ciudad. La mejor época para visitar París son todas, pero se aconseja otoño y primavera por el cáliz de la atmósfera y los colores del atardecer.',
            imagen2: '',
            pais: 'Francia'
        },
        {id: 4,
            nombre: 'Lóndres',
            imagenPortada: 'https://img.freepik.com/foto-gratis/big-ben-casa-parlamento-noche-londres-reino-unido_268835-1396.jpg?w=2000',
            info: 'Visita las atracciones de orden mundial de Londres, sus tiendas y restaurantes, y disfruta de los emocionantes eventos especiales, teatro, conciertos, exposiciones de arte y mucho más. Descubre lo mejor de Londres, Inglaterra.',
            fechaViajar: 'La mejor época para visitar el Reino Unido es de mayo a septiembre, aunque diciembre es también una buena opción. Las temperaturas más suaves de mediados de año son ideales para asistir a alguno de los eventos más conocidos del Reino Unido, o bien puedes sumergirte de lleno en la Navidad con una escapada invernal.',
            imagen2: '',
            pais: 'Inglaterra'
        },
        {id: 5,
            nombre: 'Sofía',
            imagenPortada: 'https://img3.viajar.elperiodico.com/f0/3e/37/catedral-alexander-nevsky-sofia-650x424.jpg',
            info: 'Bulgaria es ese país cuyas inspiradoras montañas contrastan con las playas doradas y sus ciudades rebosantes de historia, arte, y cultura. Sofía, su capital, late orgullosa al ritmo frenético de una ciudad rodeada de naturaleza, pero cosmopolita y con una historia que se remonta al siglo VIII a. C., cuando los tracios establecieron sus asentamientos en esta zona del mapa europeo.',
            fechaViajar: 'La mejor época para un viaje a Bulgaria son los meses más calurosos y suaves entre mayo y septiembre, aunque los meses de julio y agosto a veces puede ser bastante bochornosos.',
            imagen2: '',
            pais: 'Bulgaria'
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