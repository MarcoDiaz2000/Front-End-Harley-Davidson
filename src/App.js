import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import the necessary components
import HomePage from './pages/home/Homepage';
import SignUpPage from './pages/signup/SignUp';
import SignInPage from './pages/signin/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Reservations from './components/pages/Reservations';
import Reserve from './components/pages/Reserve';
import AddMotor from './components/pages/AddMotor';
import DeleteMotor from './components/pages/DeleteMotor';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/motors/:id" element={<Home />} />
          <Route path="/myReservation/:id" element={<Reservations />} />
          <Route path="/reserve/:id" element={<Reserve />} />
          <Route path="/add/:id" element={<AddMotor />} />
          <Route path="/delete/:id" element={<DeleteMotor />} />

        </Routes>
      </Layout>
    </Router>
    <div className="App d-flex">
      <Routes>
        <Route path="/" element={(<HomePage />)} />
        <Route path="/signin" element={(<SignInPage />)} />
        <Route path="/signup" element={(<SignUpPage />)} />
      </Routes>
    </div>
  );
}

export default App;
