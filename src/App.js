import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Layout from './components/Layout';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Policy from './pages/Policy';
import Portfolio from './pages/Portfolio';
import Signup from './pages/Signup';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/booking' element={<Booking />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        </Route>


        
      </Routes>
    </Router>
  );
}

export default App;
