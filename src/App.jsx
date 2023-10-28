import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextEditor from './components/text-editor'
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <TextEditor/>
    </>
  )
}

export default App
