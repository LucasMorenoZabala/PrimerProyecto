import React, { useState } from "react";
import { Text,View,TouchableHighlight,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'



export default function App(){
const [count, setCount] = useState(0);

return(
  <View>
    <TouchableOpacity>
      style = {{alignItem: 'center',backgroundColor: "red",padding: 10}}
      onPress = {() => setCount(count+1)}
    
    
      <Text>Press Here</Text>
    </TouchableOpacity>

   

  <TouchableHighlight>
style = {{alignItem: "center", backgroundColor: "blue",padding:10}}
onPress = {() => setCount(count +1)}
 
  <Text>Press Here</Text>
  </TouchableHighlight>

  </View>
)



}
