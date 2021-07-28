import React, { useState } from 'react';

const Test05Re = () => {

   const [show, setShow] = useState(false);

   const onShow1 = () => {
      setShow(true)
   }

   const onShow2 = () => {
      setShow(false)
   }

   const onToggle = () => {
      setShow(!show)
   }

   return (
      <div>
         <BtnWrap onShow1={onShow1} onShow2={onShow2} onToggle={onToggle} show={show}/>
         <Box show={show} />
      </div>
   );
};

const BtnWrap = ({onShow1, onShow2, onToggle, show}) => {
   
   return(
      <div>
         <button onClick={onShow1}>보이기</button>
         <button onClick={onShow2}>숨기기</button>
         <button onClick={onToggle}>
            {
               show ? "숨기기" : "보이기"
            }
         </button>
      </div>
   )
}

const Box = ({show}) => {
   return(
      <div>
         {
            show && <div>이거슨 보이게 될것입니다.</div>
         }
      </div>
   )
}

export default Test05Re;