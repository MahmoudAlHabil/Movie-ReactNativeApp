import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import { useFavoriteDataContext } from '../../contexts/favoriteDataContext';
import { Text } from 'react-native';

const FavoriteScreen = () => {
  const { favoriteData } = useFavoriteDataContext();

  const renderItem = ({ item }) => (
    <View>
      <Card style={styles.card} dataMovie={item}/>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {favoriteData.length > 0 ?
        <FlatList
        data={favoriteData}
        keyExtractor={(item, index) => (index.toString() + 'favorite')}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.container} />
        : <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Favorite Data</Text>
        </View>
      }
    </SafeAreaView>
  );
};

export default FavoriteScreen;
