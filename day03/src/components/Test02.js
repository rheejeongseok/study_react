import React from 'react';
import Test02Sub from './Test02Sub';

const Test02 = () => {
   return (
      <div>
         <h2>함수형 컴포넌트 , props </h2>
         <Test02Sub name="이정석" age={30}  addr="서울 노원구 저기" tel="01034524827" sex="남자" color="skyblue" done={true}/>
         <hr/>
         <Test02Sub name="이석정" age={33}  addr="서울 노원구 요기" tel="01034524827" sex="여자" color="skyblue" done={false}/>
         <hr/>
         <Test02Sub name="김김김" age={303} tel="0101110001" color="red" done={false} />
         <hr/>
         <Test02Sub name="최최최" addr="asdfasdfadsf" color="pink" done={true} />
         <hr/>
         <Test02Sub />
      </div>
   );
};

export default Test02;