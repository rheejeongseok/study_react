import React, { useState } from 'react';

const TodoItem = ({item, onDel, addCl2}) => {

   const {id, text, done} = item

   return (
      <li className={`${done && 'on'}`} >
         <span>&#10003;</span>
         <em onClick={() => addCl2(id)}>할일내용 : {text}</em>
         <button onClick={() => onDel(id)} >삭제</button>
      </li>
   );
};

export default TodoItem;