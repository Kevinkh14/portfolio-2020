import React from 'react';
import './App.css';
import Header from './Components/Header'
import About from "./Components/About"
import Resume from "./Components/Resume"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
