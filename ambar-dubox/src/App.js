import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import MainPage from './Components/MainPage';
import CoursesPage from './Components/CoursesPage';
import UnderConstruction from './Components/common/UnderConstruction';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
