import Movie from './Movie'

const MovieList = ( props ) => {
    return (
        <>
            {props.movies.map((movie) => (
                <div key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <p>{movie.Type}</p>
                    <img src={movie.Poster} alt='poster' ></img>
                </div>

            ))}
        </>
    )
}

export default MovieList
