import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import the necessary components
import HomePage from './pages/home/Homepage';
import SignUpPage from './pages/Signup/SignUp';
import SignInPage from './pages/signin/SignIn';

function App() {
  return (
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
