import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import {View, Text} from 'react-native';
import Rute from './Main/router/rute';

const App = () => {
  return(
    <NavigationContainer>
      <Rute />
    </NavigationContainer>
  )
}

export default App;