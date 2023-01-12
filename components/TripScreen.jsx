
import * as React from "react";
import { Text,View,FlatList,TouchableOpacity,Image, ScrollView } from "react-native";
import StylesNameTrips from '../Styles/StylesNameTrips';
import sevilla from '../img/sevilla.jpg';
import lisboa from '../img/lisboa.jpg';
import paris from '../img/paris.jpg';
import londres from '../img/londres.jpg';
import sofia from '../img/sofia.jpg';

import sevilla2 from '../img/sevilla2.jpg';
import lisboa2 from '../img/lisboa2.jpg';
import paris2 from '../img/paris2.jpg';
import londres2 from '../img/londres2.jpg';
import sofia2 from '../img/sofia2.jpg';





function TripScreen({navigation}) {
    const DATA = [
      {
        id: 1,
        nombre: 'Sevilla',
        imagenPortada: sevilla,
        info: 'Con un espíritu alegre y apasionado, Sevilla es una ciudad que destaca no solo por su gran importancia artística y arquitectónica, sino por contar con una palpitante historia que aún se siente a cada paso por el corazón de su casco antiguo.',
        fechaViajar:
          'Por este motivo, los mejores meses para visitarla son los meses templados en los que aún no hace demasiado calor, como abril, mayo, la primera quincena de junio e incluso septiembre y octubre. Si eres un devoto de la Semana Santa te recomendamos que visites Sevilla en abril.',
        imagen2: sevilla2,
        pais: 'España',
      },
      {
        id: 2,
        nombre: 'Lisboa',
        imagenPortada: lisboa,
        info: 'Si sueñas con tu próximo viaje a Europa, ven a conocer Lisboa, la ciudad histórica con muchas historias que contar. Donde el sol brilla hasta 290 días al año y la temperatura raramente baja por debajo de los 15ºC. Donde uno se siente seguro paseando durante el día y saliendo de noche. Donde la gastronomía se dedica a definir más de mil formas de cocinar el adorado bacalao. Donde encontrarás hoteles y restaurantes para todos los gustos, presupuestos y criterios. Encuentra Lisboa. Una capital auténtica, donde se cruzan costumbres ancestrales e historia secular con animación cultural e innovación tecnológica: Lisboa no tiene edad, pero le encanta la compañía. Como podrás constatar en cuanto encuentres a alguien que te explique, con muchos gestos y repeticiones, el mejor local para ir a escuchar Fado. A fin de cuentas, Lisboa es famosa por su hospitalidad y por la forma familiar de recibir a sus visitantes.',
        fechaViajar:
          'La mejor temporada para hacer un viaje a la ciudad de Lisboa en Portugal es la primavera, entre abril y junio, y el otoño entre septiembre y octubre, el verano sería ideal para aquellas personas que disfrutan de días enteros de sol, es decir julio y agosto.',
        imagen2: lisboa2,
        pais: 'Portugal',
      },
      {
        id: 3,
        nombre: 'París',
        imagenPortada: paris,
        info: 'París es la capital de Francia y constituye una de las ciudades más importantes e influyentes del mundo. Desde el punto de vista turístico, París es una de las ciudades más visitadas de Europa. Con nuestra guía de París podrás descubrir todos los secretos de la ciudad además de conseguir los mejores consejos para viajar a París ahorrando dinero.',
        fechaViajar:
          'La temporada turística en París suele ser de abril a julio, setiembre y octubre; en estos meses del año es cuando vas a coincidir con más turistas visitando la ciudad. La mejor época para visitar París son todas, pero se aconseja otoño y primavera por el cáliz de la atmósfera y los colores del atardecer.',
        imagen2: paris2,
        pais: 'Francia',
      },
      {
        id: 4,
        nombre: 'Lóndres',
        imagenPortada: londres,
        info: 'Visita las atracciones de orden mundial de Londres, sus tiendas y restaurantes, y disfruta de los emocionantes eventos especiales, teatro, conciertos, exposiciones de arte y mucho más. Descubre lo mejor de Londres, Inglaterra.',
        fechaViajar:
          'La mejor época para visitar el Reino Unido es de mayo a septiembre, aunque diciembre es también una buena opción. Las temperaturas más suaves de mediados de año son ideales para asistir a alguno de los eventos más conocidos del Reino Unido, o bien puedes sumergirte de lleno en la Navidad con una escapada invernal.',
        imagen2: londres2,
        pais: 'Inglaterra',
      },
      {
        id: 5,
        nombre: 'Sofía',
        imagenPortada: sofia,
        info: 'Bulgaria es ese país cuyas inspiradoras montañas contrastan con las playas doradas y sus ciudades rebosantes de historia, arte, y cultura. Sofía, su capital, late orgullosa al ritmo frenético de una ciudad rodeada de naturaleza, pero cosmopolita y con una historia que se remonta al siglo VIII a. C., cuando los tracios establecieron sus asentamientos en esta zona del mapa europeo.',
        fechaViajar:
          'La mejor época para un viaje a Bulgaria son los meses más calurosos y suaves entre mayo y septiembre, aunque los meses de julio y agosto a veces puede ser bastante bochornosos.',
        imagen2: sofia2,
        pais: 'Bulgaria',
      },
    ];
  
    const printElement = ({item}) => {
      return (
        <ScrollView>
          <Text style={StylesNameTrips.container}>{item.nombre}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('insideTrips', {item})}>
               <Image
                  style={{width:400,height:200}} 
                source={item.imagenPortada}   />
          </TouchableOpacity>
        </ScrollView>
      );
    };
    return (
      <View>
        <FlatList
          data={DATA}
          renderItem={printElement}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }

export default TripScreen;