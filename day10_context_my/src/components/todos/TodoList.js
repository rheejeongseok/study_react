import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {

   const {singer} = useContext(TodoContext)

   return (
      <ul>
         {
            singer.map(e => <TodoItem key={e.id} data={e} />)
         }
      </ul>
   );
};

export default TodoList;