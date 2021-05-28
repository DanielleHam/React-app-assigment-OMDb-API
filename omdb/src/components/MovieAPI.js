import Form from './Form'
import MovieList from './MovieList'

import { useState, useEffect } from 'react'

const MovieAPI = () => {

    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('Love and Monsters')
    const [type, setType] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const getMovieRequest = async (searchValue, type) => {

        const url = `http://www.omdbapi.com/?i=tt3896198&apikey=321c137c&s=${searchValue}&type=${type}`;

        
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if (data.Search) {
            setMovies(data.Search)
        }
        if(data === Error) { // måste få detta att funka 
            setErrorMessage(Error);
            console.log(errorMessage)
        }
    }

    useEffect(() => {
        getMovieRequest(searchValue, type);
    }, [searchValue, type])
    
    return (
        <div>
          <Form searchValue={searchValue} setSearchValue={setSearchValue} type={type} setType={setType}/> 
          <hr></hr>
            {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
          <MovieList movies={movies} />
        </div>
    )
}

export default MovieAPI
