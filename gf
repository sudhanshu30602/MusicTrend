// import React, {useEffect} from 'react';
// import TrackPlayer from 'react-native-track-player';
// import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

// const tracks = [
//   {
//     title: 'Hamlet - Act III',
//     artist: 'William Shakespeare',
//     source: 'Librivox',
//     uri: 'http://www.archive.org/download/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3',
//     artwork:
//       'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg',
//   },
//   {
//     id: '1',
//     url: 'https://sample-music.netlify.app/death%20bed.mp3',
//     title: 'The Greatest Song',
//     album: 'Great Album',
//     artist: 'A Great Dude',
//     artwork: 'https://picsum.photos/300',
//   },
// ];

// // TrackPlayer.updateOptions({
// //   stopWithApp: false,
// //   capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
// //   compactCapabilities: [
// //     TrackPlayer.CAPABILITY_PLAY,
// //     TrackPlayer.CAPABILITY_PAUSE,
// //   ],
// // });

// const start = async () => {
//   // Set up the player
//   await TrackPlayer.setupPlayer();

//   // Add a track to the queue
//   await TrackPlayer.add( {
//     id: '1',
//     url: 'https://sample-music.netlify.app/death%20bed.mp3',
//     title: 'The Greatest Song',
//     album: 'Great Album',
//     artist: 'A Great Dude',
//     artwork: 'https://picsum.photos/300',
//   });

//   // Start playing it
//  // await TrackPlayer.play();
// };
// start()

// const App = () => {
//   return (
//     <>
//       <TouchableOpacity onPress={() => TrackPlayer.play()}>
//         <Text style={{fontSize: 35, color: 'black'}}>Play</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => TrackPlayer.pause()}>
//         <Text style={{fontSize: 35, color: 'black'}}>Pause</Text>
//       </TouchableOpacity>
//     </>
//   );
// };
// export default App;
