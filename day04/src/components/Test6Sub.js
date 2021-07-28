import React from 'react';

const Test6Sub = ({onDel, onAdd}) => {
   return (
      <div>
         <p>
            <button onClick={() => onDel(1)}>삭제1</button>
            <button onClick={() => onDel(3)}>삭제2</button>
         </p>
         <p>
            <button onClick={() => onAdd("이승기")}>추가1</button>
            <button onClick={() => onAdd("김승기")}>추가2</button>
         </p>
      </div>
   );
};

export default Test6Sub;