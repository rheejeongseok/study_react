import React, { useRef } from 'react';

const Test09 = () => {

   const idRef = useRef(null)
   const pwRef = useRef(null)

   const click = () => {
      
      const data = {
         id:idRef.current.value,
         pw:pwRef.current.value,
      }
      const json = JSON.stringify(data,null,5);
      console.log(json)
      
   }

   return (
      <div>
         {{/*  useREF의 설명용 예재로는 적합하지않다 이건 수업용 */}}
         <p>
         <input type="text" ref={idRef}/>
         <input type="text" ref={pwRef}/>
         <button onClick={click}>확인</button>

         </p>
      </div>
   );
};

export default Test09;

/* 
   useRef 
    DOM을 직접 선택해야 하는 상황일떄
    1 .특정요소의 크기를 가져올때
    2. 스크롤바 위 치값
    3. focus - *

    useRef는 남용하지 말자
*/