import React, { useRef, useState } from 'react';

const Test3 = () => {

   // 고유번호
   const no = useRef(1)
   const [data, setData] = useState([])
   const names = '메시,메좆,호날두,좆두,음바페,좆바페,홀란드,홀좆,캉테,마레즈,살라,헨더슨,밀너,박지성,손흐임ㄴ,차범근'.split(",");

   const onAdd = () => {
      const random = Math.floor(Math.random*names.length);
      const newData = [...data,{
         id:no.current++, 
         text:names[random]
      }];
      setData(newData)
      console.log(names[random])
   }

   return (
      <div>
         <h2>고유번호</h2>
         <button onClick={onAdd}>추가</button>
         <ul>
            {
               data.map(e => {
                  return <li key={e.id}>
                     {e.id} / {e.text}
                  </li>
               })
            }
         </ul>
      </div>
   );
};

export default Test3;