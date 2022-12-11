import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button>
        onPress=
        {() =>
          navigation.navigate('Perfil', {
            userName: 'Lukasmz03',
            Name: 'Lucas',
            surName: 'Moreno',
            age: '19',
          })
        }
        <Text>Lucas</Text>
      </Button>

      <Button>
        onPress=
        {() =>
          navigation.navigate('Perfil', {
            userName: 'Ansepe',
            Name: 'Andrés',
            surName: 'Cabañas',
            age: '20',
          })
        }
        <Text>Andrés</Text>
      </Button>

      <Button>
        onPress=
        {() =>
          navigation.navigate('Perfil', {
            userName: 'Danimauri03',
            Name: 'Daniel',
            surName: 'Espinosa',
            age: '19',
          })
        }
        <Text>Daniel</Text>
      </Button>

      <Button>
        onPress=
        {() =>
          navigation.navigate('Perfil', {
            userName: 'Jorge1985',
            Name: 'Jorge',
            surName: 'Delgado',
            age: '44',
          })
        }
        <Text>Jorge</Text>
      </Button>
    </View>
  );
}

function PerfilScreen(route) {
  const {userName, Name, surName, age} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        {userName},{Name},{surName},{age}
      </Text>
    </View>
  );
}

function SettingsScreen({}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings screen</Text>
    </View>
  );
}

function GrupoHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Lista de Contactos'}}
      />

      <Stack.Screen
        name="Profile"
        component={PerfilScreen}
        options={{title: 'Datos de Contacto'}}
      />
    </Stack.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'Home' : 'Home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'Bandage' : 'Bandage-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarActiveTintColor: 'blue',
        })}>
        <Tab.Screen name="Home" component={GrupoHome} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
