

const Form = ( props ) => {

    const search = (e) => {
         e.preventDefault();
   }


    return (
        <form className='search-form' onSubmit={search}>
            <div className='form-control'>
                <label htmlFor='s'>Name of the movie, serie or episode</label>
                <input type='text' name='s' placeholder='i.e. Love and Monsters' value={props.value} onChange={(e) => props.setSearchValue(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor='type' >Choose type: </label>
                <select id="type" name="type" value={props.value} onChange={(e) => props.setType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                    <option value="episode">Episode</option>
                </select>
            </div>

            <input type='submit' value='search' className='btn btn-block'/> 
        </form>
    )
}

export default Form
