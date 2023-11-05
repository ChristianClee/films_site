import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import PopUpMessage from './components/popUpMessage/globalPopUp/PopUpMessage';
import ContactMessage from './components/contactMessage/ContactMessage';

const Layout: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      <PopUpMessage>
        <ContactMessage />
      </PopUpMessage>
    </div>
  )
}

export default Layout;