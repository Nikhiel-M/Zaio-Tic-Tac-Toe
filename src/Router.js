import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import Game from './pages/Game/Game'
import Header from './components/Header.js/Header'
import { ModalContext } from './contexts/ModalContext'


 
export const Test = ({handleModal}) => {
  return (
    <div><button onClick={() => handleModal(<Modal handleModal={handleModal} />)} >Show Modal</button></div>
  )
}

export const Modal = ({handleModal}) => {
  return (
    <div onClick={() => handleModal()} >lorem ipsum</div>
  )
}



function Router() {
  const {handleModal} = useContext(ModalContext)
  return (
    <BrowserRouter>
    <Test handleModal={handleModal}  />
    <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/game-on" element={<Game />} />
     </Routes>
    </BrowserRouter>
  )
}

export default Router