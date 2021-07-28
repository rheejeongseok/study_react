import React, { useRef, useState } from 'react';

const Test03Re = () => {

   const nameRef = useRef();
   const colorRef = useRef();

   const [name, setName] = useState("초기값");
   const [color, setColor] = useState("#951555");

   const onName = (e) => {
      const { value } = e.target;
      setName(value);
   }

   const onColor = (e) => {
      const { value } = e.target;
      setColor(value);
   }

   const onChn = (newName, newColor) => {
      /* const newName = nameRef.current.value;
      const newColor = colorRef.current.value; */

      setName(newName);
      setColor(newColor);
   }

   return (
      <div>
         <InputBox name={name} color={color} onChn={onChn} nameRef={nameRef} colorRef={colorRef} onName={onName} onColor={onColor} />
         <TextBox name={name} color={color} />
      </div>
   );
};

const InputBox = ({name, color, onName, onColor, onChn, nameRef, colorRef}) => {
   return(
      <div>
         <div><label htmlFor="name">이름입력 : </label><input type="text" id="name" name="name" ref={nameRef}/></div>
         <div><label htmlFor="color">색상입력 : </label><input type="text" id="color" name="color" ref={colorRef}/></div>
         {/* <div><label htmlFor="name">이름입력 : </label><input type="text" id="name" name="name" value={name} onChange={onName} /></div>
         <div><label htmlFor="color">색상입력 : </label><input type="text" id="color" name="color" value={color} onChange={onColor} /></div> */}
         <button onClick={() => onChn(nameRef.current.value, colorRef.current.value)} >눌러</button>
      </div>
   )
}

const TextBox = ({name, color}) => {

   return(
      <div style={{background:color}}>
         <div>이름 : {name}</div>
         <div>색상 : {color}</div>
      </div>
   )
}

export default Test03Re;