import * as React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TripScreen from "./TripScreen";
import InsideTrips from "./InsideTrips";


const Stack = createNativeStackNavigator();

function TripHome(){
    return(
        <Stack.Navigator initialRouteName="Viajes">
            <Stack.Screen name="TripScreen" component={TripScreen} options={{headerShown: false }}/>
            <Stack.Screen name="insideTrips" component={InsideTrips} options={{title: 'Información de los destinos',headerTitleAlign: 'center'}}/>
        </Stack.Navigator>
    );
}

export default TripHome;