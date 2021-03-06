import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from 'react-navigation-stack'

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/homeScreen.js"
import IssLocationScreen from "./screens/iss-locationScreen.js";
import MeteorScreen from "./screens/meteorScreen.js";
import UpdateScreen from "./screens/updateScreen.js";
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const Stack= createStackNavigator
export default function App() {
  return (
   <NavigationContainer> 
     <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}> 
      <Stack.Screen  name="Home" component={HomeScreen}/>
      <Stack.Screen  name="IssLocation" component={IssLocationScreen}/>
      <Stack.Screen  name="Meteors" component={MeteorScreen}/>
      <Stack.Screen  name="Updates" component={UpdateScreen}/>

      
      
     </Stack.Navigator>
  
   </NavigationContainer>
   
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
