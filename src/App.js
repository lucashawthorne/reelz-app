import logo from './assets/logo.svg';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Movies from './pages/Movies';
import Movie from './pages/Movie'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movie/:id" element={<Movie />} /> {/* new route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
