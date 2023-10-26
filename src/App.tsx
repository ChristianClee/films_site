import React from 'react';

import './styles/all.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Layout from './Layout';
import PreviewFilmPage from './pages/previewFilmPage/PreviewFilmPage';


function App() {
  return (
    
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage />} />
          <Route path='previewFilmPage' element={<PreviewFilmPage />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
