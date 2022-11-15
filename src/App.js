import './App.css';
import farm from './imgs/farm.jpg'
import MiApi from './components/MiApi';


function App() {
  return (
    <div className="App">

      <div className="container">
        <h1>200 Latin Quotes Api</h1>
        <img className="hero" src={farm} alt="" />
      </div>

      <div>
        <MiApi/>
        
      </div>

    </div>
  );
}

export default App;
