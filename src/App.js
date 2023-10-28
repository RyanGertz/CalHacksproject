// import logo from './logo.svg'; 
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <router> 
    <div className="App">
      <header className="App-header">
        <p>
           <code> </code> 
        </p>
        <div
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Navbar />
        </div>
      </header>
    </div>
      `<switch>
        <route path="/" component={Home}/>
        <route path="/" component={Home}/>
        <route path="/" component={Home}/>
        <route path="/" component={Home}/>
        <route path="/" component={Home}/>
      </switch>`
    </router>
  );
  
}

export default App;


import React from 'react';


import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
