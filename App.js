import React from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';

import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export default function App(){

  const DATA = [

    { name: 'Lucas',
    
    surname: 'Moreno',
    phone: 123456789,
    icon:'rocket'

    },
    { name: 'Antonio',
    
    surname: 'Moreno',
    phone: 123456786,
    icon:'apple'

    },];





  const printElement = ({item}) => {
      return(

        <View>
            <Text>{item.name}, {item.surname}</Text> <Icon name={item.icon}></Icon>
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


