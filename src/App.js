import './App.css';
import Search from './Components/Search'
import imdbAPICall from './Components/imdbAPICall'

function App() {
  return (
    <div className="App">
    <h1>Movie Trivia Search</h1>
    <Search get = {imdbAPICall.get} />
    </div>
  );
}

export default App;
