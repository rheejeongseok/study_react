import React, { createContext, useEffect, useState } from 'react';
import data from '../components/todos/data';

export const TodoContext = createContext();

const TodoProvider = (props) => {

   const [singer, setSinger] = useState(data);
   const [form, setForm] = useState({
      name:'test name',song:'test song'
   });
   const [newSinger, setNewSinger] = useState(form);
   const [mode, setMode] = useState(false);

   let no = singer.length

   const onSinger = (e) => {
      const {name, value} = e.target;
      setForm({
         ...form,[name]:value
      });
   }

   const onAdd = (person) => {
      if(!person.name || !person.song) return
      person.id = ++no
      setSinger([
         ...singer,person
      ]);
      setForm({
         name:'', song:''
      })
   }

   const onUpdate = () => {
      const {id} = newSinger;
      setSinger(singer.map(e => e.id === id ? form : e))
      setMode(false);
      setForm({
         name:'',song:''
      })
   }

   const onModSetting = (id) => {
      setNewSinger(singer.find(e => e.id === id))
      setMode(true)
   }

   useEffect(() => {
      setForm(newSinger)
   },[newSinger])

   const onDel = (id) => {
      setSinger(singer.filter(e => e.id !== id));
   }

   return (
      <TodoContext.Provider value={{singer,newSinger,form,mode,onSinger,onAdd,onModSetting,onUpdate,onDel}}>
         {props.children}
      </TodoContext.Provider>
   );
};

export default TodoProvider;