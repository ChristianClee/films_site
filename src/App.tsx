import React, { useEffect } from 'react';
import './styles/all.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Layout from './Layout';
import SeparatorPreviewPage from './pages/previewFilmPage/SeparatorPreviewPage';
import { PREVIEWFILMPAGE, SEARCHFILMPAGE } from './rout_path/paths'
import { useCloseTraller } from './app_utilits/customHooks'
import SearchFilmPage from './pages/searchFilmPage/SearchFilmPage';


function App() {
  useCloseTraller()

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage />} />
          <Route path={PREVIEWFILMPAGE} element={<SeparatorPreviewPage />} />
          <Route path={SEARCHFILMPAGE} element={<SearchFilmPage/>} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
