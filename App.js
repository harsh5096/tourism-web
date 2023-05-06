import './App.css';
import Main from "./Components/Main";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Book from "./Components/Book";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Packagemain from "./Components/Packagemain";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

export default function App() {
  return (
    <main>

<BrowserRouter>
                <Navbar/>
  <Main/>

        <Routes>
         <Route excat path="/Main" element={   <Main/>} />
          <Route excat path="/About" element={   <About/>} />
            <Route excat path="/Book" element={ <Book/>} />
         <Route excat path="/Contact" element={<Contact/>} />
        </Routes>   
      </BrowserRouter>     
      <Packagemain/>
      <Footer/>
    </main>
  )
}
