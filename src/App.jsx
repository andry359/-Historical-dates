import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import MainBlock from './Components/MainBlock/MainBlock'
import MainTitle from './Components/MainTitle/MainTitle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className='app__title title'>
        <MainTitle />
      </div>
      <div className='app__mainBlock mainBlock'>
        <MainBlock />
      </div>
      <div className='app__fotter fotter'>
        <Footer />
      </div>
    </div>
  )
}

export default App
