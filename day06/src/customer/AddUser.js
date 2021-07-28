import React, { useRef, useState } from 'react';

const AddUser = ({onAdd}) => {

   const fcRef = useRef();
   const [form, setForm] = useState({
      name:'', jobs:''
   })

   const {name, jobs} = form;

   const onForm = (e) => {
      const {name, value} = e.target;
      setForm({...form,[name]:value})
   }

   const onSubm = (e) => {
      e.preventDefault();
      fcRef.current.focus()
      onAdd(form)
      setForm({
         name:'',jobs:''
      })
   }

   return (
      <form onSubmit={onSubm}>
         <h2>아..아앗 추가</h2>
         <p>
            <label htmlFor="">이름</label>
            <input type="text" value={name} name="name" onChange={onForm} ref={fcRef}/>
         </p>
         <p>
            <label htmlFor="">직업</label>
            <input type="text" value={jobs} name="jobs"  onChange={onForm}/>
         </p>
         <p>
            <button type="submit">추가</button>
         </p>
      </form>
   );
};

export default AddUser;