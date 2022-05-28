import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Button, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Card from '../../components/Card';
import { GetMovies } from '../../API/MoviesAPI';
import styles from './styles';

const Item = ({ title }) => (
  <View>
    <Card style={styles.card} dataMovie={{}} />
  </View>
);

export var moviesList = [];

class HomeScreen extends React.Component {
  state = {
    movieList: [],
    currentMovieItem: null,
  }

  onMoviesReceived = (movieList) => {
    this.setState(prevState => ({
      movieList: prevState.movieList = movieList
    }));
    moviesList = this.state.movieList;
  }

  componentDidMount() {
    GetMovies(this.onMoviesReceived)
  }

  renderItem = ({ item }) => (
    <View>
      <Card style={styles.card} dataMovie={item} />
    </View>
  );

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.movieList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
          numColumns={2}
          columnWrapperStyle={styles.container} />
      </SafeAreaView>
    );
  }
};


export default HomeScreen;