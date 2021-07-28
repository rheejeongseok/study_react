import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css';
import '../utils/css/reset.css';

const Todos = () => {

   const listRef = useRef(0);
   const focus = useRef();
   const [list, setList] = useState([]);
   const [todo, setTodo] = useState("");
   const [clickNum, setClickNum] = useState(0);

   const onChn = (e) => {
      const {value} = e.target;
      setTodo(value)
   }

   const onAdd = (e) => {
      e.preventDefault();

      if ( !todo) return;
      setList([
         ...list,{id:++listRef.current, text:todo, done:false}
      ]);
      focus.current.focus();
   }

   const onDel = (num) => {
      setList(list.filter(e => e.id !== num));
   }

   const addCl = (num) => {
      setClickNum(num)
   }

   //  수정할때 다시 map으로 돌림
   const addCl2 = (num) => {
      setList(list.map(e => e.id === num ? {...e, done:!e.done} : {...e, done:false}))
   }
   /* const addCl2 = (num) => {
      setList(
         list.map(e => {
            if(e.id === num)  return {...e, done:!e.done}
            else return {...e, done:false}
         })
      )
   } */

   return (
      <div className="Todos">
         <h1>할일 리스트</h1>
         <TodoForm todo={todo} onChn={onChn} onAdd={onAdd} focus={focus} />
         <TodoList list={list} onDel={onDel} addCl={addCl} addCl2={addCl2} clickNum={clickNum} />
      </div>
   );
};

export default Todos;