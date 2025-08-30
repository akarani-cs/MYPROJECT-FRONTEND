import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Trailers from "./pages/Trailers";
import Navbar from "./components/Navbar";
import RatingsSection from './components/RatingsSection';
import ReviewDetail from './components/ReviewDetail';


export default function App() {

  return (
    <>
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trailers" element={<Trailers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/" element={<RatingsSection />} />
        <Route path="/reviews/:id" element={<ReviewDetail />} />
      </Routes>
    </div>
    </>
  )
}


