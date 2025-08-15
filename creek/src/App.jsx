import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>

     <Header />
    
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <h1 className="text-4xl font-bold text-white">
          🎬 Creek -Frontend
        </h1>
        
      </div>
    </>
    
  )
}

export default App;
