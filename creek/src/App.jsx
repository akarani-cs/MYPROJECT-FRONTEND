import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import About from './components/About'
import Contact from './components/Contact'


export default function App() {
  const [count, setCount] = useState(0)

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


