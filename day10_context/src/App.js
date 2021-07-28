import React from 'react';
import Color from './components/color/Color'
import ChangeColor from './components/changecolor/ChangeColor'
import Count from './components/count/Count'
import Todos from './components/todos/Todos'

import ColorProvier from './contexts/ColorContext'
import ChangeColorProvier from './contexts/ChangeColorContext'
import CountProvier from './contexts/CountContext'
import TodoProvier from './contexts/TodoContext'

const App = () => {
  return (
    <div>

      <TodoProvier>
        <Todos />
      </TodoProvier>

      <hr/>

      <ColorProvier >         
            <Color/>            
      </ColorProvier>

      <hr/>
      <ChangeColorProvier>
        <ChangeColor />
      </ChangeColorProvier>

      <hr/>
    
      <CountProvier>
            <Count/>            
      </CountProvier>
    </div>
  );
};

export default App;