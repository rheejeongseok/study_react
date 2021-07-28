import React, { useEffect, useRef, useState } from 'react';

const Test2My = () => {

   const [count, setCount] = useState(1);
   const ref1 = useRef();
   const ref2 = useRef();

   const click1 = () => {
      setCount(count => count + 1);
      ref1.current.style.color = "red";
      ref2.current.style.color = "blue";
   }

   useEffect(() => {
      if(count%2 === 0){
         ref1.current.style.color = "green";
         ref2.current.style.color = "yellow";
      }else {
         ref1.current.style.color = "red";
         ref2.current.style.color = "blue";
      }
   },[count])

   return (
      <div>
         <h2 ref={ref1}>여기는 테스트 1 입니다</h2>
         <h2 ref={ref2}>여기는 테스트 2 입니다</h2>
         <button onClick={click1}>push</button>
      </div>
   );
};

export default Test2My;