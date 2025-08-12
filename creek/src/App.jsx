import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-ceter justify-center min-h-screen bg-gray-900">
        <h1 className="text-4xl font-bold text-white">
          🎬 Creek -Movie App Frontend
        </h1>
      </div>
    </>
  )
}

export default App;
