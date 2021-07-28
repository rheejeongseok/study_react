import React, { useEffect, useState } from 'react';

const MouseMove = () => {

   const [x, setX] = useState(0)
   const [y, setY] = useState(0)

   const move = (e) => {
      setX(e.clientX)
      setY(e.clientY)
   }

   // 화면에 그려진 후 한번만
   useEffect((e) => {
      console.log('useEffect');
      window.addEventListener('mousemove', move);
      //  뒷정리(제거)
      return () => {
         window.removeEventListener('mousemove', move);
      }
   },[])

   return (
      <div>
         <h2>마우스좌표</h2>
         <div style={{border:'1px solid black', width:400, height:100, fontSize:50, lineHeight:2, textAlign:'center'}}>
            X: {x} / Y: {y}
         </div>
      </div>
   );
};


const Test4 = () => {

   const [active, setActive] = useState(false);
   const onToggle = () => {
      setActive(!active);
   }

   return (
      <div>
         <button onClick={onToggle}>{active ? "숨기기" : "보이기"}</button>
         {active && <MouseMove />}
      </div>
   );
};

export default Test4;