import React, { useRef, useState } from 'react';
import Test6Sub from './Test6Sub';

const Test6 = () => {

   const no = useRef(6)
   const [data,setData] = useState([
      {id:1, name:"이효리"},
      {id:2, name:"유이"},
      {id:3, name:"전효성"},
      {id:4, name:"박선우"},
      {id:5, name:"이선민"},
   ])

   const onDel = (id) => {
      setData(data.filter(e => e.id !== id))
   }

   const onAdd = (text) => {
      setData([
         ...data,{id:no.current++, name:text}
      ])
   }

   return (
      <div>
         {
            data.map(e => <p key={e.id}>
               {e.id} / {e.name}
            </p>)
         }
         <hr />
         <Test6Sub onDel={onDel} onAdd={onAdd} />
      </div>
   );
};

export default Test6;