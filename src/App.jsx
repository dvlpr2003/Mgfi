import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="contact" element = {<Contact/>}/>
      <Route path ="About" element = {<About/>}/>
      <Route path ="*" element = {<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
