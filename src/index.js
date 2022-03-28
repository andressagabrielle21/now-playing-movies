import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from './pages/details';

// This is the file where the whole application is rendered
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

