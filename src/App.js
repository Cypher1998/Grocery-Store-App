import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/atom/navbar/Navbar';
import SearchNav from './components/molecule/navbarsearch/SearchNav';
import GeneralFooter from './components/molecule/GeneralFooter';
import CategoryPages from './components/molecule/categorypages/CategoryPages';

function App() {
  return (
    <>
      <Router>
        <CategoryPages />
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
