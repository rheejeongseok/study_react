import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
   return (
      <div>
         <TodoInput />
         <hr />
         <TodoList />
      </div>
   );
};

export default Todos;