import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from './components/Sidebar/Footer';
import Sidebar from './components/Sidebar/Sidebar';



function App() {
  return (
    <div className='bg-red-800'>
      <Sidebar />
      <h1>.</h1>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
