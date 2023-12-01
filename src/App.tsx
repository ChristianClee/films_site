import React, { useEffect } from 'react';
import './styles/all.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Layout from './Layout';
import SeparatorPreviewPage from './pages/previewFilmPage/SeparatorPreviewPage';
import { PREVIEWFILMPAGE, SEARCHFILMPAGE, LIKEDPAGE } from './constants/paths'
import { useCloseTraller } from './hooks/customHooks'
import SearchFilmPage from './pages/searchFilmPage/SearchFilmPage';
import LikedPage from './pages/likedPage/LikedPage';


function App() {
  useCloseTraller()

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={PREVIEWFILMPAGE} element={<SeparatorPreviewPage />} />
          <Route path={SEARCHFILMPAGE} element={<SearchFilmPage />} />
          <Route path={LIKEDPAGE} element={<LikedPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
