import { useState } from 'react'
import './App.css'
import ComplexNavbar from './components/navbar'
import { Home } from './components/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div >
    <ComplexNavbar></ComplexNavbar>
    <Home/>
    </div>
  )
}

export default App
