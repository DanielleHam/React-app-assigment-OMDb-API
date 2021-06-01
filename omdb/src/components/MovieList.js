import Movie from './Movie'
import CardDeck from 'react-bootstrap/CardDeck'


const MovieList = ( props ) => {
    return (
        <CardDeck className='justify-content-around'>
            {props.movies.map((movie) => (
                <Movie key={movie.imdbID} movie={movie}/>
            ))}
        </CardDeck>
    )
}

export default MovieList
