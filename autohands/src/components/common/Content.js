import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route, HashRouter} from 'react-router-dom'
import About from '../page/about/About';
import Business from '../page/business/Business';
import News from '../page/news/News';
import People from '../page/people/People';

const Content = () => {
   return (
         <Switch>
            <Route path="/" exact><About /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/business"><Business /></Route>
            <Route path="/news"><News /></Route>
            <Route path="/people"><People /></Route>
         </Switch>
   );
};

export default Content;