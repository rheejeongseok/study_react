import React from 'react';

const JoinStep2 = ({userForm,onForm,onPage}) => {

   const {tel, email, phone, singer} = userForm;

   return (
      <div>
         <div>번호 : <input type="text" value={tel} name="tel" onChange={onForm} /></div>
         <div>이메일 : <input type="text" value={email} name="email" onChange={onForm} /></div>
         <div>핸드폰 기종 : <input type="text" value={phone} name="phone" onChange={onForm} /></div>
         <div>좋아하는 가수 : <input type="text" value={singer} name="singer" onChange={onForm} /></div>
         <div>
            <button onClick={() => onPage('prev')}>이전</button>
            <button onClick={() => onPage('next')}>다음</button>
         </div>
      </div>
   );
};

export default JoinStep2;