import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test2 = () => {

   const [count, setCount] = useState(0);
   const ref1 = useRef();
   const ref2 = useRef();

   const click1 = () => {
      setCount(count+1);
      ref1.current.style.color = 'red'
      ref2.current.style.color = "pink"
   }

   // 화면에 그려진후 실행
   useEffect( () => {
      console.log("useEffect")
      ref1.current.style.color = 'blue'
   })

   useLayoutEffect(() => {
      //  화면이 그려지기 전에 실행
      console.log('uselayoutEffect')
      ref2.current.style.color = 'lime'
   })

   // 보통 useEffect를 많이 사용한다, useEffect가 안될때 useLayoutEffect 사용

   return (
      <div>
         <h2>count : {count}</h2>
         <h1 ref={ref1}>useEffect</h1>
         <h1 ref={ref2}>useLayoutEffect</h1>
         <button onClick={click1} >change Color and Count</button>
      </div>
   );
};

export default Test2;