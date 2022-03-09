import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/atom/navbar/Navbar';
import SearchNav from './components/molecule/navbarsearch/SearchNav';

function App() {
  return (
    <>
      <SearchNav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Navbar />
    </>
  );
}

export default App;
