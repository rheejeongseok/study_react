import React, { useRef } from 'react';

const Test10 = () => {

   const selectRef = useRef();

   const onSelect = () => {
      const data = {
         color : selectRef.current.value
      }
      
      const json = JSON.stringify(data, null, 1);
      console.log(json)
   }

   return (
      <div>
         <h2>컬러 선택</h2>
         <select name="" id="" ref={selectRef}>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="pink">pink</option>
            <option value="black">black</option>
         </select>
         <button onClick={onSelect}>선택</button>
      </div>
   );
};

export default Test10;