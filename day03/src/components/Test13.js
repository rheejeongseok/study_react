import React, { useRef, useState } from 'react';
import './Test13.css';

const Test13 = () => {

   const [color, setColor] = useState(true);
   const [age, setAge] = useState(0);
   
   const onToggle = () => {
      setColor(!color);
   }

   const onAge = () => {
      setAge(age+1);
   }

   return (
      <div className={`wrap ${color ? "pink" : "tomato"}`}>
         <h2>backgroundColor</h2>
         <h2>나이 : {age}</h2>
         <p>
            <button onClick={onToggle}>배경색 바꾸기</button>
            <button onClick={onAge}>나이 증가</button>
            <button onClick={() => setAge(age-1)}>나이감소</button>
         </p>
      </div>
   );
};

export default Test13;