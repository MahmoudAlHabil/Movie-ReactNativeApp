import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, Image, Linking } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import Rating from '../../components/Rating'

const MovieScreen = (props) => {
  const movie = props.route.params;

  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{movie.Title}</Text>
        <Image source={{ uri: movie.Poster }} style={styles.poster} />
        <Text style={styles.text}>Description: {movie.Plot}</Text>
        <Text style={styles.text}>Type: {movie.Genre}</Text>
        <Text style={styles.text}>Language: {movie.Language}</Text>
        <Text style={styles.text}>Country: {movie.Country}</Text>
        <Text style={styles.text}>Rating: {<Rating setRate={movie.Rated} />}</Text>
        <Text style={styles.text}>Time: {movie.Runtime}</Text>
        <Text style={styles.text}>Realeased: {movie.Released}</Text>
        <Text style={styles.textActor}>Actors</Text>
        <ScrollView horizontal={true} style={styles.scrollActor}>
          {movie.Images.map((img, index) => <Image source={{ uri: img }} style={styles.img} key={index} />)}
        </ScrollView>
        <Button
          onPress={() => Linking.openURL(movie.watch.toString())}
          title='Watch'
          wrapperStyle={styles.watchButton} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieScreen;
