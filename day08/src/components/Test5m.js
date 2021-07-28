import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test5m = () => {

   const [data, setData] = useState([]);
   const [txt, setTxt] = useState('css');

   useEffect(() => {
      getData();
   },[txt])

   const getData = () => {
      axios.get(`http://hn.algolia.com/api/v1/search?query=${txt}`)
      .then(res => {
         setData(res.data.hits)
      })
   }

   return (
      <div>
         <input type="text" value={txt} onChange={e => setTxt(e.target.value)} />
         {
            data.map(e => {
               return <div>{e.title}</div>
            })
         }
      </div>
   );
};

export default Test5m;