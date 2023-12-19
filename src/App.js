import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import  Trainers from './pages/Trainers';
import  TrainerSinglePage from './components/TrainerSinglePage';
import  Gallery from './pages/Gallery';
import Contact from './pages/Contact'
import Plans from './pages/Plans'

import  './App.css'




function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/about' element={<About /> }/>
         <Route path='/trainers'  element ={<Trainers />}  /> 
         <Route path='/trainers/:trainersId'  element ={<TrainerSinglePage />}  ></Route>

         <Route path='/plans'  element ={<Plans />}  /> 
         <Route path='/gallery'  element ={<Gallery/>}  />
        <Route path='/contact' element={<Contact /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
