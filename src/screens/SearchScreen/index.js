import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, View, FlatList } from 'react-native';
import styles from './styles';
import Input from '../../components/Input';
import { moviesList } from '../HomeScreen';
import Card from '../../components/Card';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(moviesList);
  const masterDataSource = moviesList;


  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const renderItem = ({ item }) => (
    <View>
      <Card style={styles.card} dataMovie={item} />
    </View>
  );

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.container}>

        <Input
          onChangeText={(text) => searchFilterFunction(text)}
          placeholder="Search"
          renderIconLeft={() => <Icon name='search' size={20} color={'#c6c6c6'} />}
          wrapperStyle={styles.textInputStyle}
          value={search}
        />
        {(search) ? <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => (index.toString() + 'search')}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.container} /> : null}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
