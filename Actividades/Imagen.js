import React, {useState} from 'react';
import {Image, ScrollView, Switch} from 'react-native';
import img from './img/Cerdo-vietnamita-Animales-Faunia-5.jpg';

export default function image() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <ScrollView>
      <Image
        style={{width: 500, height: 500}}
        source={{
          uri: 'https://www.proballers.com/media/cache/torso_player/ul/player/32853-3-5d289c14ca1f02.jpg',
        }}
      />

      <Switch
        trackColor={{false: 'black', true: 'green'}}
        thumbColor={isEnabled ? 'skyblue' : 'pink'}
        onValueChange={() => setIsEnabled(previousState => !previousState)}
        value={isEnabled}
      />
      {isEnabled ? (
        <Image style={{width: 500, height: 500}} source={img} />
      ) : null}
    </ScrollView>
  );
}