import React from "react";
import { View,Text, FlatList } from "react-native";


export default function Lista(){
  const DATA = [

    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    
    title: 'Primer elemento',},
    
    { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    
    title: 'Segundo elemento',},
    
    { id: '58694a0f-3da1-471f-bd96-145571e29d72',
    
    title: 'Tercer elemento',},

    { id: 'hola',
    
    title: 'Cuarto elemento',},

    { id: 'adios',
    
    title: 'Quinto elemento',},

    { id: 'bomba',
    
    title: 'Sexto elemento',},];
    



    const printElement = ({item}) => {
      return(
        <View>
            <Text>{item.title}</Text>
        </View>
      )
    }

  return(
        <FlatList
          data={DATA}
          renderItem = {printElement}
        
        />
    )
    
}