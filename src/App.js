import React from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Nav from "./sections/Nav";
import Home from "./Home";
// Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}