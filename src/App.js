import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/atom/navbar/Navbar';
import SearchNav from './components/molecule/navbarsearch/SearchNav';
import GeneralFooter from './components/molecule/GeneralFooter';

function App() {
  return (
    <>
      <Router>
        <SearchNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <GeneralFooter />
        <Navbar />
      </Router>
    </>
  );
}

export default App;
