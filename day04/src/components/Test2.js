import React, { useState } from 'react';

const Test2 = () => {

   const [data, setData] = useState([])
   // [{id:1, text:"문자"},{id:2, text:"문자"}]


   const onAdd = () => {
      const newData = [...data,{id:data.length, text:`text${Math.floor(Math.random()*10)}`}]
      setData(newData)
   }

   const onAdd3 = () => {
      setData([
         ...data,{id:data.length, text:`text${Math.floor(Math.random()*10)}`}
      ])
   }

   const onAdd2 = () => {
      const newData = data.concat({id:data.length, text:"aa"+Math.floor(Math.random()*10)})
      setData(newData)
   }

   return (
      <div>
         <h2>데이터 추가</h2>
         <p><button onClick={onAdd}>추가</button></p>
         <ul>
            {
               data.map((e) => <li key={e.id}>
                  {e.id} / {e.text}
               </li>)
            }
         </ul>
      </div>
   );
};

export default Test2;