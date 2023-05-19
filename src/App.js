import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <img src={ require("./images/logo.png")} alt="logo not found"/>
        </div>
        <h1 className="i-do-fancy">I Do! Online</h1>
        <h2>To my Beautiful Fiance:</h2>
        <p>This is the site; I hope you like it. I love you, Kenslie!</p>
      </header>
    </div>
  );
}

export default App;
