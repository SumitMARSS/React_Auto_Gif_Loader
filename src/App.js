
import './App.css';
import Random from './components/Random';
import Tags from './components/Tags';

function App() {
  return (
    <div className="App">
      <h1>RANDOM GIFS</h1>

      <div className="containers">
        <Random/>
        <Tags/>
      </div>
    </div>
  );
}

export default App;
