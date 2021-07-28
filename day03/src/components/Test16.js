import React, { useState } from 'react';
import Test16Animal from './Test16Animal';
import Test16Display from './Test16Display';
import Test16Name from './Test16Name';

/* 데이터 관리는 부모에서 해서 전달 */

const Test16 = () => {

   const [ani, setAni] = useState("init Ani");
   const [name, setName] = useState("init Name");

   const chnAni = (e) => {
      const {value} = e.target;
      setAni(value)
   }

   const chnName = (e) => {
      const {value} = e.target;
      setName(value)
   }

   return (
      <div>
         <Test16Name name={name} chnName={chnName}/>
         <hr/>
         <Test16Animal ani={ani} chnAni={chnAni}/>
         <hr/>
         <Test16Display name={name} ani={ani}/>
      </div>
   );
};

export default Test16;