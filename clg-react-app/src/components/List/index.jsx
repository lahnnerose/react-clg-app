import moviesData from "../../data/movies.json";
import MovieListItem from "../Movie";

function MovieList() {
    return (
        moviesData.movies.map((movie) => {
            return (
                <MovieListItem movieData={movie}/>  
            )
        })
    )
}

export default MovieList