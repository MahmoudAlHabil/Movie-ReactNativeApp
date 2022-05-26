import React from 'react';
import { SafeAreaView, ScrollView, View, Button, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Card from '../../components/Card';
import styles from './styles';
import { MovieDummy } from '../../utils/Film';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Item = ({ title }) => (
  <View style={{ flexDirection: 'row', margin: 0 }}>
    <Card style={styles.card} />
  </View>
);

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.outerContainer}>
        <FlatList
          data={MovieDummy}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.container}
        />
    </SafeAreaView>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;