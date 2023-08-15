import logo from './logo.svg';
import './App.css';
import Grid from "./Grid.jsx"
function App() {
  return (
    <div className="App" >
    <div>
    <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          get code
        </a>
    </div>
   
      <div style={{
        height:"80%",
      }} >
      <Grid/>
      </div>
      
    </div>
  );
}

export default App;
