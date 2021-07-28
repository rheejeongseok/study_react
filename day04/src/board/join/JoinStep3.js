import React from 'react';

const JoinStep3 = ({userForm,onPage}) => {

   const {name, age, addr, hobby, tel, email, phone, singer} = userForm;

   return (
      <div>
         <div>이름 : {name}</div>
         <div>나이 : {age}</div>
         <div>주소 : {addr}</div>
         <div>취미 : {hobby}</div>
         <div>번호 : {tel}</div>
         <div>이메일 : {email}</div>
         <div>핸드폰 기종 : {phone}</div>
         <div>좋아하는 가수 : {singer}</div>
         <div>
            <button onClick={() => onPage('prev')}>이전</button>
            <button onClick={() => onPage('next')}>다음</button>
         </div>
      </div>
   );
};

export default JoinStep3;