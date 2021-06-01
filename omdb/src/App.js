import Header from './components/Header'
import MovieAPI from './components/MovieAPI'
import Footer from './components/Footer'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Container >
      <Header />
      <hr></hr>
      <MovieAPI />
      <hr></hr>
      <Footer />
    </Container>
  );
}

export default App;
