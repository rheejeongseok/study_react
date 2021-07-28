import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import {Link , Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">홈</Link> </li>
        <li><Link to="/about">자기소개</Link> </li>
        <li><Link to="/profile">나에대한소개</Link></li>
      </ul>
      
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
    </div>
  );
};

export default App;