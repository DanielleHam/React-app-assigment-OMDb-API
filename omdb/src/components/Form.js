import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FormSearch = ( props ) => {

    const search = (e) => {
         e.preventDefault();
   }


    return (
        <Form onSubmit={search}>
             <Form.Group>
                <Form.Label >Name of the movie, serie or episode</Form.Label>
                <Form.Control type='text' placeholder='i.e. Love and Monsters' value={props.value} onChange={(e) => props.setSearchValue(e.target.value)}/>
            </Form.Group> 
            
            <Form.Group>
                <Form.Label>Choose type: </Form.Label>
                <Form.Control as='select' id="type" name="type" value={props.value} onChange={(e) => props.setType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                    <option value="episode">Episode</option>
                </Form.Control>
            </Form.Group>
            <Button variant="dark" type='submit' value='search' block>Search</Button>
         
        </Form>
    )
}

export default FormSearch
