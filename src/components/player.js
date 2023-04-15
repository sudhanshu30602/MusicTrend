// import React, {useEffect, useState} from 'react';
// import {Text, Button, View, Image} from 'react-native';
// import TrackPlayer, {
//   TrackPlayerEvents,
//   useTrackPlayerEvents,
//   useProgress,
//   Event,
//   STATE_PLAYING,
// } from 'react-native-track-player';
// // import {
// //   useTrackPlayerEvents,
// //   usePlaybackState,
https://instamobile.io/mobile-development/react-native-music-player/




// // } from 'react-native-track-player';
// import Slider from '@react-native-community/slider';
// import styles from './styles';

// const songDetails = {
//   id: '1',
//   url: 'https://sample-music.netlify.app/death%20bed.mp3',
//   title: 'The Greatest Song',
//   album: 'Great Album',
//   artist: 'A Great Dude',
//   artwork: 'https://picsum.photos/300',
//   // {
//   //   title: 'death bed',
//   //   artist: 'Powfu',
//   //   artwork: require('../src/assests/death-bed.jpg'),
//   //   url: 'https://sample-music.netlify.app/death%20bed.mp3',
//   //   //duration: 2 * 60 + 53,
//   //   id: '1',
//   // },
// };

// const trackPlayerInit = async () => {
//   await TrackPlayer.setupPlayer();
//   TrackPlayer.updateOptions({
//     stopWithApp: true,
//     capabilities: [
//       TrackPlayer.CAPABILITY_PLAY,
//       TrackPlayer.CAPABILITY_PAUSE,
//       TrackPlayer.CAPABILITY_JUMP_FORWARD,
//       TrackPlayer.CAPABILITY_JUMP_BACKWARD,
//     ],
//   });
//   await TrackPlayer.add({
//     id: songDetails.id,
//     url: songDetails.url,
//     type: 'default',
//     title: songDetails.title,
//     album: songDetails.album,
//     artist: songDetails.artist,
//     artwork: songDetails.artwork,
//   });
//   return true;
// };

// const App = () => {
//   const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [sliderValue, setSliderValue] = useState(0);
//   const [isSeeking, setIsSeeking] = useState(false);
//   const {position, duration} = useProgress(250);

//   const events = [Event.PlaybackState, Event.PlaybackError];
 

  
//   useEffect(() => {
//     const startPlayer = async () => {
//      // let a = await trackPlayerInit();
//       //setIsTrackPlayerInit(a);
//     //let isInit = await trackPlayerInit();
//       console.log("hii");
//      // setIsTrackPlayerInit(isInit);
//     };
//     startPlayer();
//   }, []);

//   //this hook updates the value of the slider whenever the current position of the song changes
//   useEffect(() => {
//     if (!isSeeking && position && duration) {
//       setSliderValue(position / duration);
//     }
//   }, [position, duration]);

//   // useTrackPlayerEvents([useTrackPlayerEvents.PLAYBACK_STATE], event => {
//   //   if (event.state === STATE_PLAYING) {
//   //     setIsPlaying(true);
//   //   } else {
//   //     setIsPlaying(false);
//   //   }
//   // });
//   useTrackPlayerEvents(events, event => {
//     if (event.type === Event.PlaybackError) {
//       setIsPlaying(true);
//     }
//     if (event.type === Event.PlaybackState) {
//       setIsPlaying(false);
//     }
//   });

//   const onButtonPressed = () => {
//     if (!isPlaying) {
//       console.log(TrackPlayer.play());
//       setIsPlaying(true);
//     } else {
//       TrackPlayer.pause();
//       setIsPlaying(false);
//     }
//   };

//   const slidingStarted = () => {
//     setIsSeeking(true);
//   };

//   const slidingCompleted = async value => {
//     await TrackPlayer.seekTo(value * duration);
//     setSliderValue(value);
//     setIsSeeking(false);
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <View style={styles.imageContainer}>
//         <Image
//           source={{
//             uri: songDetails.artwork,
//           }}
//           resizeMode="contain"
//           style={styles.albumImage}
//         />
//       </View>
//       <View style={styles.detailsContainer}>
//         <Text style={styles.songTitle}>{songDetails.title}</Text>
//         <Text style={styles.artist}>{songDetails.artist}</Text>
//       </View>
//       <View style={styles.controlsContainer}>
//         <Slider
//           style={styles.progressBar}
//           minimumValue={0}
//           maximumValue={1}
//           value={sliderValue}
//           minimumTrackTintColor="#111000"
//           maximumTrackTintColor="#000000"
//           onSlidingStart={slidingStarted}
//           onSlidingComplete={slidingCompleted}
//           thumbTintColor="#000"
//         />
//         <Button
//           title={isPlaying ? 'Pause' : 'Play'}
//           onPress={onButtonPressed}
//           style={styles.playButton}
//         //  disabled={!isTrackPlayerInit}
//           color="#000000"
//         />
//       </View>
//     </View>
//   );
// };

// export default App;
