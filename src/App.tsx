import React from 'react';

import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App bg-[#2b2b2b]">
      <Sidebar />
      <h1>React Router</h1>
      <Outlet />
      <p>footer</p>
    </div>
  )
}

export default App;
