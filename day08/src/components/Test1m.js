import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test1m = () => {

   const [data, setData] = useState([]);

   useEffect(() => {
      getData4()
   }, [])

   const getData1 = async() => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      setData(res.data)
   }

   const getData2 = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then( res => res.json())
      .then( res => setData(res))
   }

   const getData3 = () => {
      axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
               console.log(res)
               setData(res.data)
            })
   }

   const getData4 = async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      const res1 = await res.json();
      setData(res1)
      console.log(res)
      console.log(res1)
   }

   return (
      <div>
         {
            data.map(e => <div key={e.id}>
               {e.id} / {e.title}
            </div>)
         }
      </div>
   );
};

export default Test1m;