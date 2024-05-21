import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Review from './screens/Review';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/reviews" element = {<Review/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
