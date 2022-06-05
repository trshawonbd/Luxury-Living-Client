import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, } from "react-router-dom";
import Home from './Pages/Homepage/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Navbar from './Pages/Shared/Navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Authentication/Login/Login';
import Registarion from './Pages/Authentication/Registration/Registarion';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import AddService from './Pages/Dashboard/Admin/AddService/AddService';
import Services from './Pages/AllServices/Services';
import ServiceDetaills from './Pages/AllServices/ServiceDetaills';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/serviceDetails/:id' element={<ServiceDetaills></ServiceDetaills>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>

            <Dashboard></Dashboard>
          </RequireAuth>

        }>
          <Route path='/dashboard/addService' element={<AddService></AddService>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registarion></Registarion>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
