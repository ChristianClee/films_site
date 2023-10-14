import React from 'react';

import './styles/all.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Layout from './Layout';


function App() {
  return (
    
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
