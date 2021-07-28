import React, { useState } from 'react';
import Test1SubMy from './Test1SubMy';

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

const Test1My = () => {

   const [data, setData] = useState(list)
   const [fdata, setFdata] = useState([])

   //  useEffect가 처음에 실행이 되니까 fdata에 검색값이 빈값인 결과가 들어간다
   const searchWord = (word) => {
      // setFdata(data.filter(e => e.name.indexOf(word) !== -1))

      const regData = data.filter(e => {
         const re = new RegExp(word,'ig');
         return e.name.match(re)
      })
      setFdata(regData)
   }

   return (
      <div>
         <Test1SubMy searchWord={searchWord} />
         <ul>
            {
               fdata.map(e => <li key={e.id}>
                  {e.id} / {e.name}
               </li>)
            }
         </ul>
      </div>
   );
};

export default Test1My;