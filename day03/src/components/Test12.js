import React, { useState } from 'react';

const Test12 = () => {

   const [chk, setChk] = useState(false);

   const onShowHide = (e) => {
      const {checked} = e.target
      setChk(checked)
   }

   return (
      <div>
         <input type="checkbox" onChange={onShowHide} checked={chk}/>체크박스
         <button>확인</button>
         {chk && <div style={{width:300, height:300, background:"pink", margin:'30px auto'}}></div>}
         
      </div>
   );
};

export default Test12;