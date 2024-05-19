import React from 'react';
import Navbar from './Navbar';
import UserInfo from './UserInfo';
import Game from './Game';

const App = () => {
  return (
    <div className="flex font-fredoka bg-bg-purple-ref">
      <Navbar />
      <UserInfo />
    </div>
  );
};

export default App;