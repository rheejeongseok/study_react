import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({list, onDel, addCl, addCl2,clickNum}) => {
   return (
      <ul className="TodoList">
         {
            list.map(e =>
               <TodoItem key={e.id} item={e} onDel={onDel} addCl={addCl} addCl2={addCl2} clickNum={clickNum} />
            )
         }
      </ul>
   );
};

export default TodoList;