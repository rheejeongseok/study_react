import React from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {

   const list = useSelector(state => state.todos.todos)

   return (
      <div>
         {
            list.map(e => <TodoItem key={e.id} item={e} />)
         }
      </div>
   );
};

export default TodoList;