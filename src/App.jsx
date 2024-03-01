import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Banner from './components/Banner';
import Goals from './components/Goals';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Goals />
      <Banner />
      <Services />
      <Contact />
    </>
  )
}

export default App
