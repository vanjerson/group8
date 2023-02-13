import React from 'react';
import Header from './components/header/header';
import Home from './components/header/home';
import Projects from './components/header/project';
import About from './components/header/about';
import Contact from './components/header/contact';
import Footer from './components/header/footer';

const App = ()=>{
  return(
    <div>
        <Header/>
        <Home/>
        <Projects/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App;