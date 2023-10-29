import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

export default Layout;