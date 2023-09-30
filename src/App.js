import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import the necessary components
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './pages/home/Homepage';
import SignInPage from './pages/signin/SignIn';
import Layout from './components/layout/Layout';
import Main from './routes/Home';
import Delete from './routes/Delete';
import AddNew from './routes/AddNew';
import MyReservations from './routes/MyReservations';
import Reserve from './routes/Reserve';
import ItemDetail from './routes/ItemDetail';

function App() {
  const user = useSelector((state) => state.users.user);

  if (!user || user.length === 0) {
    return (
      <>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/motors" element={<Main />} />
          <Route path="/myReservations" element={<MyReservations />} />
          <Route path="/reserve/:id" element={<Reserve />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/add/:id" element={<AddNew />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/motors/:id" element={<ItemDetail />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
