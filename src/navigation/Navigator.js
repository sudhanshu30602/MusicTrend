import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MusicPlayer from '../screens/MusicPlayer';
import Home from '../screens/Home';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MusicPlayer"
          component={MusicPlayer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
