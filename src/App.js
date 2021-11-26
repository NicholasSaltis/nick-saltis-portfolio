import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Bio } from './components/Bio'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { ShowProject } from './components/ShowProject'
import { GlobalStyles } from './styled-components/globalStyles'

const App = () => {


  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectName" element={<ShowProject />} />
        <Route path="/bio" element={<Bio />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
