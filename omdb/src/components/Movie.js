

const Movie = ( movie ) => {
    return (
        <div>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <p>{movie.type}</p>
            <img src={movie.Poster} alt='poster' ></img>
        </div>
    )
}

export default Movie
