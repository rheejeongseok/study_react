import React from 'react';

const Test07 = () => {

   const click = (e) => {
      console.log(e.target)
      console.log(e.currentTarget)
      /* 
         target : 클릭한부분
         currentTarget : 이벤트 걸려잇는 부분
      */
   }

   return (
      <div>
         <button onClick={click}>
            <span>확인</span><br/>
            <b>클릭 </b>
         </button>
      </div>
   );
};

export default Test07;