import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './component/pages/Home';
import AddEdit from './component/pages/AddEdit';
import View from './component/pages/View';
import Header from './component/Header';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header/>
    <ToastContainer/>
    <Routes>
    <Route  path="" element={<Home/>} />
      <Route  path="/" element={<Home/>} />
      <Route  path="/add" element={<AddEdit/>} />
      <Route  path="/update/:id" element={<AddEdit/>} />
      <Route  path="/view" element={<View/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
