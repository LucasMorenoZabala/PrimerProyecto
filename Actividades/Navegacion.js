import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página principal</Text>

      <Button onPress={() => navigation.navigate("Profile",{name: "Lucas",age: '19'})} title={'Pasar Página'} />
    </View>



      
  );
}

function ProfileScreen({navigation,route}) {
  
  const {name,age} = route.params;
  console.log("El route es: ", route);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile, {name},{age}</Text>
      <Button onPress={() => navigation.navigate("First Page")} title={'Pasar Página'} />
      
    </View>
  );
}

function FirstScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Primera página</Text>
      
    </View>
  );
}




const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer initialRouteName="Profile">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Mis detalles"}} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Firstpage" component={FirstScreen} />
      </Stack.Navigator>
    

    </NavigationContainer>
  );
}

export default App;