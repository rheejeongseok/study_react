import React, { useEffect, useState } from 'react';

const MouseMove = () => {

   const [x, setX] = useState(0);
   const [y, setY] = useState(0);

   const move = (e) => {
      setX(e.clientX);
      setY(e.clientY);
   }

   useEffect(() => {
      window.addEventListener('mousemove', move);
      return () => {
         window.removeEventListener('mousemove', move);
      }
   }, [])

   return (
      <div>
         <h2>마우스좌표</h2>
         <div style={{border:'1px solid black', width:400, height:100, fontSize:50, lineHeight:2, textAlign:'center'}} >
            X : {x} / Y : {y}
         </div>
      </div>
   )

}

const Test4My = () => {
   return (
      <div>
         <MouseMove />
      </div>
   );
};

export default Test4My;