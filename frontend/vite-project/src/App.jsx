import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import AttendeeDashboard from './pages/Dashboard/AttendeeDashboard.jsx';
import OrganiserDashboard from './pages/Dashboard/OrganiserDashboard.jsx';
import SpeakerDashboard from './pages/Dashboard/SpeakerDashboard.jsx';

function App() {
  // Check if user is authenticated by token existence in localStorage
  // const token = localStorage.getItem('token');
  // const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login/>}/>

         <Route path="/attendee/dashboard" element={<AttendeeDashboard/>}/>

          <Route path="/organiser/dashboard" element={<OrganiserDashboard />}/>

          <Route path="/speaker/dashboard" element={<SpeakerDashboard/>}/>




        {/* <Route path="/login" element={!token ? <LoginPage /> : <Navigate to="/dashboard" />} />
        <Route
          path="/dashboard"
          element={
            !token ? (
              <Navigate to="/login" />
            ) : user?.role === 'attendee' ? (
              <AttendeeDashboard />
            ) : user?.role === 'organiser' ? (
              <OrganiserDashboard />
            ) : user?.role === 'speaker' ? (
              <SpeakerDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        /> */}




        {/* Optional: add signup route */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
