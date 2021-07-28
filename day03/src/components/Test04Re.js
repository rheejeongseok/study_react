import React, { useState } from 'react';

const Test04re = () => {

   const [classis, setClassis] = useState("yo");
   const [color, setColor] = useState("#909090");

   const onChn = () => {
      setClassis(classis !== "yo" ? "yo" : "hiyo");
      setColor(color === "#909090" ? "#900990" : "#909090")
   }

   return (
      <div className={`${classis}`} style={{background:color}} onClick={onChn}>
         <div>여기는 무엇ㅇ니간ㅁㄴㅇㄹ고고</div>
      </div>
   );
};

export default Test04re;