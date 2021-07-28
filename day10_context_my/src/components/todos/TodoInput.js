import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

const TodoInput = () => {

   const {form, onSinger, onAdd, mode, onUpdate} = useContext(TodoContext);
   const {name, song} = form;

   const onSubmit = (e) => {
      e.preventDefault();
      !mode ? onAdd(form) : onUpdate();
   }

   return (
      <form onSubmit={onSubmit}>
         <div>
            <label htmlFor="">name : </label><input type="text" placeholder="name" value={name} name="name" onChange={onSinger} />
         </div>
         <div>
            <label htmlFor="">song : </label><input type="text" placeholder="song" value={song} name="song" onChange={onSinger} />
         </div>
         <div>
            <button onClick={() => onSubmit}>
               {
                  !mode ? '제출' : '수정'
               }
            </button>
         </div>
      </form>
   );
};

export default TodoInput;