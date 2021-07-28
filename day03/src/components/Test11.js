import React, { useRef, useState } from 'react';

const Test11 = () => {

   const selRef = useRef();
   const [color, setColor] = useState();
   const [text, setText] = useState();

   const onSelect = () => {
      // setColor(selRef.current.value)
      setColor(text)
   }

   const onChange = (e) => {
      const {value} = e.target
      setText(value)
      // setColor(e.target.value)
   }

   return (
      <div>
         <h2 style={{color:color}}>컬러 선택</h2>
         <select name="" id="" ref={selRef} onChange={onChange}>
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

export default Test11;