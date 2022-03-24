import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAskedQuestion from './pages/FAskedQuestion';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import IndexRoute from './pages/IndexRoute';
import Profile from './pages/Profile';
import ChangePassword from './pages/ChangePassword';
import OrderPage from './pages/OrderPage';
import TermsConditions from './pages/TermsConditions';
import Navbar from './components/atom/navbar/Navbar';
import PrivateRoute from './components/atom/PrivateRoute';
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
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<IndexRoute />} />
              <Route path="order-summary" element={<IndexRoute />} />
              <Route path="profile" element={<Profile />} />
              <Route path="my-orders" element={<OrderPage />} />
              <Route path="change-password" element={<ChangePassword />} />
            </Route>
          </Route>
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/faq" element={<FAskedQuestion />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <GeneralFooter />
        <Navbar />
        <ToastContainer autoClose={3000} position="top-center" limit={2} />
      </Router>
    </>
  );
}

export default App;
