import { useState } from 'react'
import './App.css'
import Progressbar from './Components/ProgressbarComponents/Progressbar'
import InputNum from './Components/InputComponents/InputNum'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Progressbar/>
      </div>
    </>
  )
}

export default App
