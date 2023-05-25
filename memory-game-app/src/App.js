import './App.css';
import Cards from './Cards';

function App() {

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="App">
     <h1>Memory Game</h1>
     <Cards>
    
     </Cards>
     <button onClick={refreshPage}>New Game</button>
    </div>
  );
}

export default App;
