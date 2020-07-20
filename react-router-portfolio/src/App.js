import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import './App.css';

const App = () => {
  const [posts] = useState([
    {title: 'Working From Home', body: "It's the best. I have the shortest commute ever."},
    {title: 'I Love Pugs', body: 'I plan on becoming a dog dad soon.'},
    {title: 'Next.js', body: 'Next is my favorite React framework.'}
  ])

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Router DOM</h1>
      </header>
      <nav>
        <ul>
          <Link to='/'>
            <li>
              Homepage
            </li>
          </Link>
          <Link to='/about'>
            <li>
              About
            </li>
          </Link>
          <Link to='/blog'>
            <li>
              Blog
            </li>
          </Link>
          <Link to='/projects'>
            <li>
              Projects
            </li>
          </Link>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' render={() =>
          <>
            <Homepage />
          </>
        } />
        <Route exact path='/about' render={() =>
          <>
            <About />
          </>
        } />
        <Route exact path='/blog' render={() =>
          <>
            <Blog posts={posts} />
          </>
        } />
        <Route exact path='/projects' render={() =>
          <>
            <Projects />
          </>
        } />
      </Switch>
    </div>
  );
}

export default App;
