import React from 'react';
import {View, StatusBar, StyleSheet, Text} from 'react-native';
import MusicPlayer from './src/screens/MusicPlayer';
import Navigator from './src/navigation/Navigator';

const App = () => {
  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" />
      {/* <MusicPlayer /> */}
      <Navigator />
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});