import React, { useState } from 'react';

const Join = ({onJoin}) => {

   const [form, setForm] = useState({
      name:'', pwd:'', email:''
   });
   const {name,pwd,email} = form;
   const [pwdre,setPwdre] = useState('');

   const onIp = (e) => {
      const {name, value} = e.target;
      setForm({
         ...form,[name]:value
      })
   }
   

   return (
      <div>
         <div>
            <label htmlFor="f_name">이름</label><input type="text" id="f_name" name="name" value={name} onChange={onIp} />
         </div>
         <div>
            <label htmlFor="f_pwd">비밀번호</label><input type="password" id="f_pwd" name="pwd" value={pwd} onChange={onIp} />
         </div>
         <div>
            <label htmlFor="f_pwd_re">비밀번호 확인</label><input type="password" id="pwd_re" name="f_pwd_re" value={pwdre} onChange={(e) => setPwdre(e.target.value)} />
         </div>
         <div>
            <label htmlFor="f_email">이메일</label><input type="text" id="f_email" name="email" value={email} onChange={onIp} />
         </div>
         <div>
            <button onClick={() => onJoin(form)}>확인</button>
         </div>
      </div>
   );
};

export default Join;