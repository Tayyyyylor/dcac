import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/error' element={<ErrorPage/>}/>

    </Routes>
  )
}

export default App