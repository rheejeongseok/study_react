import React from 'react';
import { BrowserRouter as Router , Link, Route, Switch }  from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import NotFile from './components/NotFile'

const App = () => {
  return (
    <Router>    
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/profile">profile</Link></li>
        </ul>

         {/* 화면에 보이는 부분 */}
        <Switch>
            <Route path="/" exact > <Home />  </Route>
            <Route path="/about" > <About /> </Route>
            <Route path="/profile" > <Profile /> </Route>
            <Route path="*" > <NotFile /> </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;