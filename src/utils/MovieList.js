import React from "react";
import { Button, FlatList, SafeAreaView, Text, View } from 'react-native'
import { AddMovie, GetMovies } from '../API/MoviesAPI';
import { MovieDummy } from "./Film";


export default class Movie extends React.Component {

    state = {
        movieList: [],
        currentMovieItem: null,
    }

    onMovieAdded = (movie) => {
        alert('Movie Added ' + movie);
        this.setState(prevState => ({
            movieList: [movie, ...prevState.movieList]
        }));
    }

    onMoviesReceived = (movieList) => {
        this.setState(prevState => ({
            movieList: prevState.movieList = movieList
        }));
    }

    componentDidMount() {
        GetMovies(this.onMoviesReceived)
    }

    render() {
        return (
            <SafeAreaView>
                <Button title="add" onPress={
                    () => AddMovie({
                        title: MovieDummy[15].Title,
                        plot: MovieDummy[15].Plot,
                        released: MovieDummy[15].Released,
                        genre: MovieDummy[15].Genre,
                        language: MovieDummy[15].Language,
                        country: MovieDummy[15].Country,
                        rated: MovieDummy[15].Rated,
                        runtime: MovieDummy[15].Runtime,
                        actors: MovieDummy[15].Actors,
                        poster: MovieDummy[15].Poster,
                        images: MovieDummy[15].Images,
                    }, this.onMovieAdded)
                } />
                <FlatList
                    data={this.state.movieList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Text>{item.title}</Text>
                                <Text>{item.plot}</Text>
                                {alert('mahmoud' + this.state.movieList + this.state.movieList[0].title)}
                            </View>
                        )
                    }} />
            </SafeAreaView>
        )
    }
}
