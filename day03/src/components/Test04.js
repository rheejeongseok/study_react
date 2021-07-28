import React, { useState } from 'react';

const Test04 = () => {

   const [color, setColor] = useState("pink");
   const [done, setDone] = useState(true);

   const changeColor = () => {
      setColor(color === "pink" ? "tomato" : "pink")
      /* color === "pink" ? setColor("tomato") : setColor("pink") */
      /* done ?  setColor("tomato") : setColor("pink") 
      setDone(!done); */
   }

   return (
      <div>
         <p>문제 : h2를 클릭시 배경색 바꾸기</p>
         <h2 style={{color:color}} onClick={changeColor}>배경색 바꾸기</h2>
      </div>
   );
};

export default Test04;