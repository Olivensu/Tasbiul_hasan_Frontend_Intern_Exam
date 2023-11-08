import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main'

function App() {

  return (
    <div className='bg-base-200'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App
