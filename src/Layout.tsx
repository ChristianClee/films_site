import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import PopUpMessage from './components/popUpMessage/globalPopUp/PopUpMessage';
import ContactMessage from './components/contactMessage/ContactMessage';
import Greeting from './components/greeting/Greeting';

const Layout: React.FC = () => {




  return (
    <div className="App">
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />

      <Greeting title='hello World'></Greeting>

      <PopUpMessage>
        <ContactMessage />
      </PopUpMessage>
    </div>
  )
}

export default Layout;