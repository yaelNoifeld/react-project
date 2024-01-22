import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/user/home';
import MeetingsList from './components/admin/meetingsList';
import Admin from './components/admin/admin';
import ServicesList from './components/user/servicesList';
import { AuthProvider } from "./components/authContex";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="admin" element={<Admin />}>
              <Route path="services" element={<ServicesList />} />
              <Route path="meetings" element={<MeetingsList />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
