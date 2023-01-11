import * as React from "react";
import { ScrollView, Text,View } from "react-native";




function InsideTrips({route}){
    const {item} = route.params;
    return(
        <ScrollView>
            
            <Text>{item.pais}</Text>
            <Text>{item.nombre}</Text>
            <Text>{item.info}</Text>
            <Text>{item.fechaViajar}</Text>
            
        </ScrollView>
    )
}


export default InsideTrips;