import React from 'react';
import Color from './components/color/Color';
import Count from './components/count/Count';
import ChangeColor from './components/color/ChangeColor';
import Todos from './components/todos/Todos';

const App = () => {
   return (
      <div>
         <Color />
         <hr />
         <Count />
         <hr />
         <ChangeColor />
         <hr />
         <Todos />
      </div>
   );
};

export default App;