import React from 'react';

const JoinStep1 = ({userForm,onForm,onPage}) => {

   const {name, age, addr, hobby} = userForm;

   return (
      <div>
         <div>이름 : <input type="text" value={name} name="name" onChange={onForm} /></div>
         <div>나이 : <input type="text" value={age} name="age" onChange={onForm} /></div>
         <div>주소 : <input type="text" value={addr} name="addr" onChange={onForm} /></div>
         <div>취미 : <input type="text" value={hobby} name="hobby" onChange={onForm} /></div>
         <div>
            <button onClick={() => onPage('next')}>다음</button>
         </div>
      </div>
   );
};

export default JoinStep1;