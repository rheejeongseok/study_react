import React, { useEffect, useState } from 'react';

const Test7 = () => {

   const [count, setCount] = useState(0)
   const [plag, setPlag] = useState(false);

   const chnPlag = () => {
      setPlag(!plag);
   }

   const reset = () => {
      setCount(0)
      setPlag(plag && !plag)
   }

   useEffect(() => {
      let a;

      if(plag){
         a = setInterval(() => {
            setCount(count => count + 1)
         },1000)
      }else if(!plag && count !== 0) {
         clearInterval(a)
      }

      return() => {
         clearInterval(a)
      }

   },[plag])

   return (
      <div>
         <h1>count : {count}</h1>
         <button onClick={chnPlag}>{plag ? '중지' : '시작'}</button>
         <button onClick={reset}>초기화</button>
      </div>
   );
};

export default Test7;