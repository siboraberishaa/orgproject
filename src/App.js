import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {

  useEffect(() => {
    const handleTouchMove = () => {
      return true;
    };
  
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
  
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  

  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default App;
