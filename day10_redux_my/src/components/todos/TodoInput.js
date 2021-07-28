import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { changetext, insert } from '../../store/modules/todos';

const TodoInput = () => {

   const text = useSelector(state => state.todos.text);
   const dispatch = useDispatch();

   const onSubmit = (e) => {
      e.preventDefault();
      dispatch(insert(text))
   }

   return (
      <form onSubmit={onSubmit}>
         <input type="text" value={text} onChange={(e) => dispatch(changetext(e.target.value))} />
      </form>
   );
};

export default TodoInput;