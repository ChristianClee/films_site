import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './modules/header/Header';
import Footer from './modules/footer/Footer';
import PopUpMessage from './components/globalPopUp/PopUpMessage';
import ContactMessage from './UI/contactMessage/ContactMessage';
import Greeting from './UI/greeting/Greeting';

const Layout: React.FC = () => {




  return (
    <div className="App">
      <Header />
      <main>
        <div className='container'>
          <Outlet />
        </div>
      </main>
      <Footer />

      {/* <Greeting title='hello World'></Greeting> */}
      <PopUpMessage>
        <ContactMessage />
      </PopUpMessage>
    </div>
  )
}

export default Layout;