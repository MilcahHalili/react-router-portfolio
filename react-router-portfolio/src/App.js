import React from 'react';
import Homepage from './pages/Homepage'
import About from './pages/About'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Router DOM</h1>
      </header>
      <Homepage />
      <About />
      <Blog />
      <Projects />
    </div>
  );
}

export default App;
