import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import About from './pages/About';
import MainCategory from './pages/MainCategory';
import SubCategory from './pages/SubCategory';
import Contact from './pages/Contact';
import FAskedQuestion from './pages/FAskedQuestion';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import IndexRoute from './pages/IndexRoute';
import ProductPage from './pages/ProductPage';
import Profile from './pages/Profile';
import ChangePassword from './pages/ChangePassword';
import CheckOutPage from './pages/CheckOutPage';
import OrderPage from './pages/OrderPage';
import OrderInvoice from './pages/OrderInvoice';
import SearchPage from './pages/SearchPage';
import TermsConditions from './pages/TermsConditions';
import Navbar from './components/atom/navbar/Navbar';
import PrivateRoute from './components/atom/PrivateRoute';
import SearchNav from './components/molecule/navbarsearch/SearchNav';
import GeneralFooter from './components/molecule/GeneralFooter';
import CategoryPages from './components/molecule/categorypages/CategoryPages';
import CartDisplay from './components/molecule/cartfolder/CartDisplay';

function App() {
  return (
    <Router>
      <CategoryPages />
      <CartDisplay />
      <SearchNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main-category/:category" element={<MainCategory />} />
        <Route path="/sub-category/:category" element={<SubCategory />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/product/:product" element={<ProductPage />} />
        <Route path="/order/:order_id" element={<OrderInvoice />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<IndexRoute />} />
            <Route path="order-summary" element={<IndexRoute />} />
            <Route path="profile" element={<Profile />} />
            <Route path="my-orders" element={<OrderPage />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
        </Route>
        <Route path="/checkout" element={<PrivateRoute />}>
          <Route path="/checkout" element={<CheckOutPage />} />
        </Route>
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/faq" element={<FAskedQuestion />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <GeneralFooter />
      <Navbar />
      <ToastContainer autoClose={3000} position="top-center" limit={2} />
    </Router>
  );
}

export default App;
