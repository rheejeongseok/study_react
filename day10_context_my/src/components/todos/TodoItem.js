import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

const TodoItem = ({data}) => {

   const {id, name, song} = data;
   const {onDel, onModSetting} = useContext(TodoContext);

   return (
      <li>
         {id} / {name} / {song} / <button onClick={() => onModSetting(id)} >수정</button> / <button onClick={() => onDel(id)}>삭제</button>
      </li>
   );
};

export default TodoItem;