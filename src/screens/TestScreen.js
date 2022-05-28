import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import Card from '../components/Card';
import { GetMovies } from '../API/MoviesAPI';
import { ScaledSheet } from 'react-native-size-matters';
const Item = ({ title }) => (
  <View>
    <Card style={styles.card} dataMovie={{}} />
  </View>
);

class HomeScreen extends React.Component {
  state = {
    movieList: [],
    currentMovieItem: null,
  }

  onMoviesReceived = (movieList) => {
    this.setState(prevState => ({
      movieList: prevState.movieList = movieList
    }));
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
      <SafeAreaView style={styles.outerContainer}>
        <FlatList
          data={this.state.movieList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
          numColumns={2}
          style={styles.outerContainer} />
      </SafeAreaView>
    );
  }
};


export default HomeScreen;

const styles = ScaledSheet.create({
  outerContainer: {

  },
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  card: {
    height: '170@s',
    width: '155@s',
    backgroundColor: '#a9a9a9',
    justifyContent: 'center',
    alignItems: 'center',
  },
})