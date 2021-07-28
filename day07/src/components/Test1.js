import React, { useState } from 'react';
import Test1Sub from './Test1Sub';

const list = [
   {id:1, name:'asdf'},
   {id:2, name:'a'},
   {id:3, name:'as'},
   {id:4, name:'asd'},
   {id:5, name:'asdf'},
   {id:6, name:'asdfa'},
   {id:7, name:'asdfs'},
   {id:8, name:'asdfd'},
   {id:9, name:'asdff'},
   {id:10, name:'asdfg'},
   
]

const Test1 = () => {

   const [data,setData] = useState(list);
   const [fdata,setFdata] = useState(data);
   const onSearch = (text) => {
      // setData(fdata.filter(e => e.name.indexOf(text) !== -1))
      // 정규표현식
      const nData = fdata.filter(e => {
         const re = new RegExp(text, 'ig')
         return e.name.match(re)
      })
      setData(nData)

   }

   return (
      <div>
         <Test1Sub  onSearch={onSearch}/>
         <ul>
            {
               data.map(e => <li key={e.id}>
                  {e.id} / {e.name}
               </li>)
            }
         </ul>
      </div>
   );
};

export default Test1;