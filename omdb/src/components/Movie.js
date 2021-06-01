import Card from 'react-bootstrap/Card'
import { ListGroup } from 'react-bootstrap'


const Movie = ( {movie} ) => {
    return (
        <Card style={{ minWidth: '18rem', maxWidth: '20rem' }} className='mb-3'>
            <Card.Img variant="top" src={movie.Poster} alt='poster'/>
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                    <ListGroup>
                        <ListGroup.Item>{movie.Year}</ListGroup.Item>
                        <ListGroup.Item>{movie.Type}</ListGroup.Item>
                    </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default Movie
