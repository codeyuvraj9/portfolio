import './App.css';
import Home from './screens/Home';
import Resume from './screens/Resume'
import Contact from './screens/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Review from './screens/Review';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/resume" element = {<Resume/>}/>
          <Route exact path = "/reviews" element = {<Review/>}/>
          <Route exact path = "/contact" element = {<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
