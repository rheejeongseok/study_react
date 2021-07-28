import React from 'react';

const BoardUser = ({user}) => {

   const {name, age, addr, hobby, tel, email, phone, singer} = user;

   return (
      <div>
         <span style={{marginRight:10}}>이름 : {name}</span>
         <span style={{marginRight:10}}>나이 : {age}</span>
         <span style={{marginRight:10}}>주소 : {addr}</span>
         <span style={{marginRight:10}}>취미 : {hobby}</span>
         <span style={{marginRight:10}}>번호 : {tel}</span>
         <span style={{marginRight:10}}>이메일 : {email}</span>
         <span style={{marginRight:10}}>핸드폰 기종 : {phone}</span>
         <span style={{marginRight:10}}>좋아하는 가수 : {singer}</span>
      </div>
   );
};

export default BoardUser;