import React from 'react'
import { Image,ScrollView } from 'react-native'
import img from './img/Cerdo-vietnamita-Animales-Faunia-5.jpg'


export default function image(){

return(
   
   <ScrollView>
    <Image
        style = {{width: 500, height: 500}}
        source ={{
            
            uri: 'https://www.proballers.com/media/cache/torso_player/ul/player/32853-3-5d289c14ca1f02.jpg'

        }}

    />

    <Image
        style = {{width: 500, height: 500}}
        source ={img}

    />
    </ScrollView>
    
);

} 