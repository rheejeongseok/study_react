import React, { useState } from 'react';

const Test08 = () => {

   const [id, setId] = useState('');
   const [pw, setPw] = useState('');

   const chnId = (e) => {
      // setId(e.target.value);
      const {value} = e.target;
      setId(value);
   }

   const chnPw = (e) => {
      // setPw(e.target.value)
      const {value} = e.target;
      setPw(value)
   }

   const onReset = () => {
      setId("")
      setPw("")
   }

   return (
      <div>
         <input type="text" onChange={chnId} value={id}/>
         <input type="text" onChange={chnPw} value={pw}/>
         <button onClick={onReset}>초기화</button>
         <h2>id: {id}/pw : {pw}</h2>
      </div>
   );
};

export default Test08;