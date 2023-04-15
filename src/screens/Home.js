// import {StyleSheet, Text, View, Button} from 'react-native';
// import React from 'react';
// import songs from '../modal/data';

// const Home = ({navigation}) => {
//   // console.log(songs);
//   return (
//     <View>
//       <Text style={{color:'red'}}></Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('MusicPlayer')}
//       />
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({});
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import songs from '../modal/data';

const Home = ({navigation}) => {
  //console.log(songs);
  const data = [
    {
      id: '1',
      title: 'Top Hits',
      description: 'Listen to the most popular songs',
      image: require('../assest/img/getlucky.png'),
    },
    {
      id: '2',
      title: 'New Releases',
      description: 'Discover the latest songs',
      image: require('../assest/img/getlucky.png'),
    },
    {
      id: '3',
      title: 'Genres',
      description: 'Explore music by different genres',
      image: require('../assest/img/getlucky.png'),
    },
    {
      id: '4',
      title: 'My Library',
      description: 'Access your saved songs and playlists',
      image: require('../assest/img/getlucky.png'),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigation.navigate('MusicPlayer');
        }}>
        <Image source={item.artwork} style={styles.itemImage} />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.artist}</Text>
        </View>
        <Icon name="chevron-forward" size={24} color="#8c8c8c" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Music Store</Text>
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="search" size={24} color="#8c8c8c" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={songs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer: {
    height: '95%',
    width: '95%',
    borderRadius: 15,
    backgroundColor: '#088F8F',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  searchButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  itemDescription: {
    fontSize: 16,
    marginTop: 5,
    color: 'black',
  },
});

export default Home;
