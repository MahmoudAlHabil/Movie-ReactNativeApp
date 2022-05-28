import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import styles from './styles';
import { moviesList } from '../HomeScreen';
import Card from '../../components/Card';

const FavoriteScreen = () => {
  const [favorite, setFavorite] = useState(moviesList);
  const masterDataSource = moviesList;

  useEffect(() => {
    setFavorite(masterDataSource.filter((item) => item.Favorite == true));
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Card style={styles.card} dataMovie={item} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favorite}
        keyExtractor={(item, index) => (index.toString() + 'favorite')}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.container} />
    </SafeAreaView>
  );
};

export default FavoriteScreen;
