import { useState } from 'react'
import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import MainContent from './layout/MainContent'

function App() {

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
