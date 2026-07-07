import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import Vacation from './pages/Vacation/Vacation';
import Requests from './pages/Requests/Requests';
import Accounting from './pages/Accounting/Accounting';
import Library from './pages/Library/Library';
import Training from './pages/Training/Training';
import Profile from './pages/Profile/Profile';
import Company from './pages/Company/Company';
import News from './pages/News/News';
import Certificates from './pages/Certificates/Certificates';
import Tasks from './pages/Tasks/Tasks';
import SocialServices from './pages/SocialServices/SocialServices';
import BusinessTrips from './pages/BusinessTrips/BusinessTrips';
import Documents from './pages/Documents/Documents';
import Feedback from './pages/Feedback/Feedback';

import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/personal" element={<PersonalInfo />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/vacation" element={<Vacation />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/documents" element={<Documents />} />
 <Route path="/certificates" element={<Certificates />} />
          <Route path="/training" element={<Training />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/company" element={<Company />} />
          <Route path="/social" element={<SocialServices />} />
          <Route path="/news" element={<News />} />
          <Route path="/trips" element={<BusinessTrips />} />
         
       <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;