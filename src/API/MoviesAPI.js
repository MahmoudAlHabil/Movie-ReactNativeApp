import firestore from '@react-native-firebase/firestore';

export function AddMovie(movie, addComplete) {
    firestore()
        .collection('Movies')
        .add({
            title: movie.title,
            plot: movie.plot,
            released: movie.released,
            genre: movie.genre,
            language: movie.language,
            country: movie.country,
            rated: movie.rated,
            runtime: movie.runtime,
            actors: movie.actors,
            poster: movie.poster,
            images: movie.images,
            createAt: firestore.FieldValue.serverTimestamp()
        }).then((snapshot) => snapshot.get())
        .then((movieData) => addComplete(movieData.data()))
        .catch((error) => alert(error));
}

export async function GetMovies(moviesRetreived) {
    var movieList = [];

    var snapshot = await firestore()
        .collection('Movies')
        .get()

    snapshot.forEach((doc) => {
        movieList.push(doc.data());
    });

    moviesRetreived(movieList);
}