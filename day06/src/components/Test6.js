import React, { useEffect, useRef, useState } from 'react';

const Test6 = () => {

   const [count, setCount] = useState(0);
   /* const ref1 = useRef();

   useEffect(() => {
      const a = setInterval(() => {
         setCount(count => count + Number(ref1.current.value))
      },1000)

      return () => {
         clearInterval(a)
      }
   }) */
   const [step, setStep] = useState(0);

   const onStep = (e) => {
      setCount(0)
      setStep(Number(e.target.value))
   }

   useEffect(() => {
      console.log('setInterval')
      const a = setInterval(() => {
         setCount(count => count + step)
      },1000)

      return () => {
         console.log('clearInterval')
         clearInterval(a)
      }
   },[step])


   return (
      <div>
         {/* <input type="text" ref={ref1}/> */}
         <input type="text" value={step} onChange={onStep}/>
         <h1>{count}</h1>
      </div>
   );
};

export default Test6;