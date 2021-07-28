import React, { useRef, useState } from 'react';
import '../utils/css/reset.css';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import './style.css';

const Customer = () => {

  
   const userData = [
      {id:1, name:'람머스', jobs:'구른다', },
      {id:2, name:'다리우스', jobs:'덩크왕', },
      {id:3, name:'가렌', jobs:'내검과심장', },
      {id:4, name:'럭스', jobs:'빛망치', },
   ]
   const [users,setUsers] = useState(userData);
   const [edit, setEdit] = useState(false);
   const [current,setCurrent] = useState({})
   const no = useRef(users.length);

   const onAdd = (form) => {
      form.id = ++no.current
      setUsers([
         ...users,form
      ])
   }

   const onRemove = (id) => {
      setUsers(users.filter(e => e.id !== id))
   }

   const onModify = (data) => {
      setEdit(true)
      setCurrent(data)
   }

   const onUpdate = (form) => {
      const {id} = form
      setUsers(users.map(e => e.id === id ? form : e))
      setEdit(false)
   }

   return (
      <div className="customer">
         { edit ? <EditUser current={current} onUpdate={onUpdate} setEdit={setEdit}/> : <AddUser onAdd={onAdd}/>}
         <ListUser users={users} onRemove={onRemove} onModify={onModify} />
      </div>
   );
};

export default Customer;