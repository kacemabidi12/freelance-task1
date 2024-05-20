import React from 'react';
import Navbar from './Navbar';
import UserInfo from './UserInfo';
import Jeux from './Jeux-Page';

const App = () => {
  return (
    <div className="flex font-fredoka bg-bg-purple-ref">
      <Navbar />
      <Jeux />
    </div>
  );
};

export default App;