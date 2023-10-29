import React, { useEffect } from 'react';
import './styles/all.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Layout from './Layout';
import PreviewFilmPage from './pages/previewFilmPage/PreviewFilmPage';
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
          <Route path={PREVIEWFILMPAGE} element={<PreviewFilmPage />} />
          <Route path={SEARCHFILMPAGE} element={<SearchFilmPage/>} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
