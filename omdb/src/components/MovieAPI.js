import FormSearch from './Form'
import MovieList from './MovieList'

import { useState, useEffect } from 'react'

const MovieAPI = () => {

    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('Love and Monsters')
    const [type, setType] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    const getMovieRequest = async (searchValue, type) => {

        setErrorMessage(null);
        const url = `http://www.omdbapi.com/?i=tt3896198&apikey=321c137c&s=${searchValue}&type=${type}`;
        
        
        const res = await fetch(url);
        const data = await res.json();
        //console.log(data);
        if (data.Response === "True") {
            setMovies(data.Search)
            console.log(data.Search)
        } else {
            setErrorMessage(data.Error);
            console.log(errorMessage)
        }
    }

    useEffect(() => {
        getMovieRequest(searchValue, type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue, type])
    
    return (
        <div>
          <FormSearch searchValue={searchValue} setSearchValue={setSearchValue} type={type} setType={setType}/> 
          <hr></hr>
            {!errorMessage ? (
                <MovieList movies={movies} />
            ) : (
                <p className="text-center font-weight-bold"> {errorMessage} </p>
            )}
          
        </div>
    )
}

export default MovieAPI
