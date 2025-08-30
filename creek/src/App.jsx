import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Trailers from "./pages/Trailers";
import Navbar from "./components/Navbar";


export default function App() {

  return (
    <>
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trailers" element={<Trailers />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
    </>
  )
}


