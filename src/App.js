import './App.css';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieSpecific from './components/Home/Movies/MovieSpecific/MovieSpecific';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<MovieSpecific />} />
        </Routes>


      </Router>


    </>

  );
}

export default App;
