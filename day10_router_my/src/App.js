import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {AnimatedSwitch, AnimatedRoute} from 'react-router-transition';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Home from './components/Home';
import Page from './components/Page';
import User from './components/User';
import data from './components/data';
import './App.css';

const App = () => {
   return (
      <Router>
         <div>
            <nav>
               <ul>
                  <li><Link to="/" >Home</Link></li>
                  <li><Link to="/page" >Page</Link></li>
                  <li><Link to="/user/html" >html</Link></li>
                  <li><Link to="/user/css" >css</Link></li>
                  <li><Link to="/user/javascript" >javascript</Link></li>
                  <li><Link to="/user/react" >react</Link></li>
               </ul>
            </nav>
            <Route
               render={({location}) => {
                  return(
                     <TransitionGroup className="container">
                        <CSSTransition timeout={300} classNames="page" key={location.key} unmountOnExit>
                           <Switch>
                              <Route path="/" exact><Home /></Route>
                              <Route path="/page" ><Page /></Route>
                              <Route path="/user/:sub" ><User data={data} /> </Route>
                           </Switch>
                        </CSSTransition>
                     </TransitionGroup>
                  )
               }}
            ></Route>
         </div>
      </Router>
   )
};

export default App;