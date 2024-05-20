import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import UserInfo from './UserInfo';
import Jeux from './Jeux-Page';

const App = () => {
  return (
    <Router>
      <div className="flex font-fredoka bg-bg-purple-ref">
        <Navbar />
        <Routes>
          <Route path="/profile" element={<UserInfo />} />
          <Route path="/jeux" element={<Jeux />} />
          <Route path="/" element={<Jeux />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
