import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboardlayout from './components/Dashboardlayout'
function App() {
  return (
    <>
    <div className='app-container'>
      <Sidebar/>
      <Header/>
      <Dashboardlayout/>
    </div>

    
 
    </>
  )
}

export default App
