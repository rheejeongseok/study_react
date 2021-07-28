import React from 'react';
import './TodoForm.css';

const TodoForm = ({todo, onAdd, onChn, focus}) => {

   return (
      <form className="TodoForm" onSubmit={onAdd}>
         <input type="text" value={todo} name="text" onChange={onChn} ref={focus} placeholder="할일을 입력" />
         <button type="submit">추가</button>
      </form>
   );
};

export default TodoForm;