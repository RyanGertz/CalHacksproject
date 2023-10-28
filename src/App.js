import logo from './logo.svg';
import './App.css';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> this is a test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This text is a hyperlink.
        </a>
      </header>
      <Signup />
    </div>
    
  );
}

export default App;
