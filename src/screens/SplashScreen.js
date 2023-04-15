// import {StyleSheet, Text, View, Image} from 'react-native';
// import {React} from 'react';

// const SplashScreen = () => {
// //   const navigate = ({navigation}) => {
// //     return navigation.navigate('Home');
// //   };

//  // setTimeout(navigate, 5000);
//   return (
//     <View>
//       <Image
//         style={{height: '110%', width: '100%'}}
//         source={require('../assest/img/SplashScreen.jpg')}
//       />
//     </View>
//   );
// };

// export default SplashScreen;

// const styles = StyleSheet.create({});

import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const SplashScreen = ({navigation}) => {
  function navigate() {
    navigation.navigate('Home');
  }
  setTimeout(navigate, 3000);
  return (
    <View>
      <Image
        style={{height: '100%', width: '100%'}}
        source={require('../assest/img/SplashScreen.jpg')}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
