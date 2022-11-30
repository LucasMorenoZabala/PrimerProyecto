import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation,route}) {
  const {userName} = route.params;
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página principal</Text>

      <Button onPress={() => navigation.navigate("Profile",{userName})} title={'Pasar Página'} />
    </View>

      
  );
}

function ProfileScreen({route}) {
  const {userName} = route.params;
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile</Text>
      <Text>{userName}</Text>
      
    </View>
  );
}





const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer initialRouteName="Profile">
      <Stack.Navigator>
        <Stack.Screen initialParams={{userName: "Lucas"}} name="Home" component={HomeScreen} options={{title:"Home", headerTitleAlign:'center'}} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title:"Profile", headerTitleAlign:'center'}} />
      </Stack.Navigator>
    

    </NavigationContainer>
  );
}

export default App;


