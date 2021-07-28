import React from 'react';
import Color from './components/color/Color';
import Count from './components/count/Count';
import Todos from './components/todos/Todos';

import ColorProvider from './contexts/ColorContext';
import CountProvider from './contexts/CountContext';
import TodoProvider from './contexts/TodoContext';

const App = () => {
  return (
    <div>
      <ColorProvider>
         <Color />
      </ColorProvider>

      <CountProvider>
      <Count />
      </CountProvider>

      <TodoProvider>
         <Todos />
      </TodoProvider>

    </div>
  );
};

export default App;