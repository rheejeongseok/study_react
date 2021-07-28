import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/common/Header';
import Content from './components/common/Content';
import './utils/css/normalize.css';
import './utils/css/common.css';

const App = () => {
   return (
      <div>
         <Router>
            <Header />
            <Content />
         </Router>
      </div>
   );
};

export default App;