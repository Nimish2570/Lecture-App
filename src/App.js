import './App.css';
import React from 'react';


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';
import Header from './components/layout/Header/Header.js';
import Footer from './components/layout/Footer/Footer.js';

import VideoPlayer from './components/Lecture/Lecture';


function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });
  }, []);

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/:Subject" element={<VideoPlayer />} />
        {/* Add more routes if needed */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
