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
        <Text style={styles.title}>{movie.title}</Text>
        <Image source={{ uri: movie.poster }} style={styles.poster} />
        <Text style={styles.text}>Description: {movie.plot}</Text>
        <Text style={styles.text}>Type: {movie.genre}</Text>
        <Text style={styles.text}>Language: {movie.language}</Text>
        <Text style={styles.text}>Country: {movie.country}</Text>
        <Text style={styles.text}>Rating: {<Rating setRate={movie.rated} />}</Text>
        <Text style={styles.text}>Time: {movie.runtime}</Text>
        <Text style={styles.text}>Realeased: {movie.released}</Text>
        <Text style={styles.textActor}>Actors</Text>
        <ScrollView horizontal={true} style={styles.scrollActor}>
          {movie.images.map((img, index) => <Image source={{ uri: img }} style={styles.img} key={index} />)}
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
