import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './Signup'




function App() {
  



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" activeClassName="active" element={ <Home /> }/>
          <Route path="/signup" activeClassName="active" element={ <Signup /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;