
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

import Home from './Home'

import Downbar from './components/Downbar'

function App() {
 

  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />


      
    </Routes>
    <Downbar/>
    
    </>
  )
}

export default App
