import * as React from "react";
import { ScrollView, Text,Image } from "react-native";
import StyleInside from '../Styles/StyleInside'




function InsideTrips({route}){
    const {item} = route.params;
    return(
        <ScrollView>
             
            <Text style={StyleInside.title}>{item.pais}</Text>
            <Text style={StyleInside.subTitle}>{item.nombre}</Text>
            <Text style={StyleInside.container}>{item.info}</Text>
            <Text style={StyleInside.container}>{item.fechaViajar}</Text>
            <Image
                  style={{width:500,height:200}} 
                source={item.imagen2}   />
            
        </ScrollView>
    )
}


export default InsideTrips;