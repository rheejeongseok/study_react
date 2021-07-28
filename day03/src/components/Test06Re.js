import React, { useState } from 'react';

const Test06Re = () => {

   const [count, setCount] = useState(0);
   const [prev, setPrev] = useState(0);

   const onUD = (e) => {
      const { btn } = e.target.dataset
      setPrev(count)
      setCount(btn === "up" ? count+1 : count-1)
   }

   return (
      <div>
         <CountBox count={count} prev={prev}/>
         <BtnBox onUD={onUD}/>
      </div>
   );
};

const BtnBox = ({onUD}) => {
   return (
      <div>
         <button onClick={onUD} data-btn="up">증가</button>
         <button onClick={onUD} data-btn="down">감소</button>
      </div>
   )
}

const CountBox = ({count, prev}) => {
   return(
      <div>
         <span>
            count : {count}
            {
               count > prev ? "증가" : "감소"
            }
         </span>
      </div>
   )
}

export default Test06Re;