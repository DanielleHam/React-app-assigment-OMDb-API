import Header from './components/Header'
import MovieAPI from './components/MovieAPI'
import Footer from './components/Footer'


function App() {
  return (
    <div className="container">
      <Header />
      <hr></hr>
      <MovieAPI />
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
