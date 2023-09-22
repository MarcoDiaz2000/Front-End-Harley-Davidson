import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import the necessary components
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/Homepage';
import SignUpPage from './pages/signup/SignUp';
import SignInPage from './pages/signin/SignIn';
import Layout from './components/layout/Layout';
import Main from './routes/Home';
import Delete from './routes/Delete';
import AddNew from './routes/AddNew';
import MyReservations from './routes/MyReservations';
import Reserve from './routes/Reserve';
import ItemDetail from './routes/ItemDetail';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Layout>
        <Routes>

          <Route path="/motors" element={<Main />} />
          <Route path="/myReservations" element={<MyReservations />} />
          <Route path="/reserve/:id" element={<Reserve />} />
          <Route path="/add/:id" element={<AddNew />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/motors/:id" element={<ItemDetail />} />

        </Routes>
      </Layout>
    </>
  );
}

export default App;
