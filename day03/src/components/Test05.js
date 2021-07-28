import React, { useState } from 'react';

const Test05 = () => {

   const [display, setDisplay] = useState(false);

   const click01 = () => {
      setDisplay(true)
   }

   const click02 = () => {
      setDisplay(false)
   }

   const click03 = () => {
      /* setDisplay(display ? false : true) */
      setDisplay(!display)
   }

   return (
      <div>
         <p>
            <button onClick={click01}>보이기</button>
            <button onClick={click02}>숨기기</button>
            <button onClick={click03}>
               {!display ? "보이기" : "숨기기"}
            </button>
         </p>
         {/* <div style={{width:300, height:100, background:"pink", magrin:"10px auto", display:display ? "block" : "none"}}></div> */}
         {display && <div style={{width:300, height:100, background:"pink", magrin:"10px auto"}}></div>}
      </div>
   );
};

export default Test05;