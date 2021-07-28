import React, { useRef, useState } from 'react';

const Test4 = () => {

   const no = useRef(1)
   const idRef = useRef()
   const [data, setData] = useState([]);
   const [form, setForm] = useState({
      uname:"",
      upwd:"",
   });

   const {uname, upwd} = form

   const onForm = (e) => {
      const {name, value} = e.target
      setForm({
         ...form,[name]:value
      })
   }

   const onAdd = () => {
      // 키와 값이 같은 네이밍이면 이렇게 써도 됨
      setData(
         [...data,{id:no.current++, uname, upwd}]   
      )
      setForm({
         uname:"",
         upwd:""
      })
      idRef.current.focus()
   }

   /* const onAdd = () => {
      setData(
         [...data,{id:no.current++, uname:uname, upwd:upwd}]   
      )
      idRef.current.focus()
   } */

   return (
      <div>
         <input type="text" name="uname" value={uname} onChange={onForm} ref={idRef}/>
         <input type="text" name="upwd" value={upwd} onChange={onForm}  />
         <button onClick={onAdd} >추가</button>

         <ul>
            {
               data.map(e => <li key={e.id}>
                  {e.id} / {e.uname} / {e.upwd}
               </li>)
            }
         </ul>
      </div>
   );
};

export default Test4;