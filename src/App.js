import React from 'react';
import './App.css';
import Header from './Components/Header'
import About from "./Components/About"
import Resume from "./Components/Resume"
import Projects from "./Components/Projects"

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Resume/>
      <Projects/>
    </div>
  );
}

export default App;
