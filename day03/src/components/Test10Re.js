import React, { useRef, useState } from 'react';

const Test10Re = () => {

   const [color,setColor] = useState("pink");
   const colorRef = useRef();

   const onColor = () => {
      const selColor = colorRef.current.value;
      setColor(selColor)
      const data = {
         color : colorRef.current.value
      }
      console.dir(colorRef.current)
      console.log(data)
      const json = JSON.stringify(data, null, 1);
      console.log(json)
   }

   return (
      <div>
         <SelBox colorRef={colorRef} color={color} />
         <BtnBox onColor={onColor} />
      </div>
   );
};

const SelBox = ({colorRef, color}) => {
   return(
      <div style={{background:color, width:300, height:300, display:"flex", justifyContent:"center", alignItems:"center"}}>
         <select name="" id="" ref={colorRef}>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="yellow">yellow</option>
            <option value="lime">lime</option>
            <option value="purple">purple</option>
            <option value="black">black</option>
         </select>
      </div>
   )
}

const BtnBox = ({onColor}) => {
   return(
      <div>
         <button onClick={onColor}>바꾸기!</button>
      </div>
   )
}

export default Test10Re;