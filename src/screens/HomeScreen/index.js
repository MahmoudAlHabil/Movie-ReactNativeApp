import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Button, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Card from '../../components/Card';
import { GetMovies } from '../../API/MoviesAPI';
import styles from './styles';
import { useMoviesDataContext } from '../../contexts/moviesDataContext';

const HomeScreen = () => {
  const {moviesData, setMoviesData} = useMoviesDataContext()

  // const onMoviesReceived = (moviesData) => {
  //   setMoviesData(moviesData);
  // }

  // useEffect(() => {
  //   GetMovies(onMoviesReceived)
  // }, []);

  // useEffect(() => {
  //   setMoviesData(MovieDummy)
  // }, []);

  const renderItem = ({ item }) => (
    <View>
      <Card style={styles.card} dataMovie={item} />
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={moviesData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.container} />
    </SafeAreaView>
  );
};


export default HomeScreen;