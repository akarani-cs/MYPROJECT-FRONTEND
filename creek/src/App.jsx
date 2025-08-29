import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import About from './components/About'
import Contact from './components/Contact'


export default function App() {

  return (
    <>
    <Navbar />

    <div className="bg-black min-h-screen text-white">
      <About />
    </div>

    <div className="bg-black min-h-screen text-white">
      <Contact />
    </div>
    </>
  )
}


