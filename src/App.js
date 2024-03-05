import React from 'react'
import Navbar from './components/navar/navbar'
import Home from './components/Home/Home'
import Faq from './components/Faq/faq'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Faq />
      <Footer />
      
      
    </div>
  );
}

export default App;
