import React, { useEffect, useState } from 'react';

const Test5 = () => {

   const [count, setCount] = useState(0)

   /* useEffect(() => {
      console.log('setInterval')
      const id = setInterval(() => {
         setCount(count + 1)
      }, 1000)
      return () => {
         console.log('clearInterval')
         clearInterval(id)
      }
   },) */

   useEffect(() => {
      console.log('setInterval')
      const id = setInterval(() => {
         setCount(count => count +1 )
      }, 1000)
      return () => {
         console.log('clearInterval')
         clearInterval(id)
      }
   },[])

   return (
      <div>
         <h1>number : {count}</h1>
      </div>
   );
};

export default Test5;