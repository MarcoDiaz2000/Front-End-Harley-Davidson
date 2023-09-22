/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
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
  );
}

export default App;
