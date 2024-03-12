import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';


function App() {

  return (

    <div className="App">

      <Router>

        <Navbar />

        <Routes>
          <Route exact
            path="/"
            element={<Home />}
          ></Route>
          <Route exact
            path="/services"
            element={<Home />}
          ></Route>
          <Route exact
            path="/Products"
            element={<Home />}
          ></Route>
          <Route exact
            path="/Sign-up"
            element={<Home />}
          ></Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
