import React, { useEffect, useLayoutEffect, useRef } from 'react';

const Test3 = () => {

   const ref1 = useRef();
   const ref2 = useRef();

   useEffect(() => {
      // ref1.current.focus()
   },[])

   useLayoutEffect(() => {
      ref1.current.focus()
   }, [])

   return (
      <div>
         <input type="text" ref={ref1}/>
         <input type="text" ref={ref2}/>
      </div>
   );
};

export default Test3;