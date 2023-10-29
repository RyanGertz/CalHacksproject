import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './Signup';
import Login from './Login';





function App() {
  



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" activeClassName="active" element={ <Home /> }/>
          <Route path="/signup" activeClassName="active" element={ <Signup /> }/>
          <Route path="/login" activeClassName="active" element={ <Login /> }/>
          <Route path="/creators" activeClassName="active" element={ <Creators /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;