import React, { useEffect, useState } from 'react';

const EditUser = ({current, onUpdate, setEdit}) => {

   const [form, setForm] = useState(current)

   useEffect(() => {
      setForm(current)
   },[current]);

   const {name, jobs} = form;

   const chnForm = (e) => {
      const {name, value} = e.target;
      setForm({...form, [name]:value})
   }

   const onSubm = (e) => {
      e.preventDefault();
      onUpdate(form);
      setForm({
         name:'',jobs:''
      })
   }

   return (
      <form onSubmit={onSubm}>
         <h2>아..아앗 수정</h2>
         <p>
            <label htmlFor="">이름</label>
            <input type="text" value={name} name="name" onChange={chnForm}/>
         </p>
         <p>
            <label htmlFor="">직업</label>
            <input type="text" value={jobs} name="jobs" onChange={chnForm}/>
         </p>
         <p>
            <button>수정</button>
            <button onClick={() => setEdit(false)}>취소</button>
         </p>
      </form>
   );
};

export default EditUser;