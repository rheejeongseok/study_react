import React, { useRef, useState } from 'react';

const Test14 = () => {

   const idRef = useRef();
   //  상태 초기값, 숫자, 문자, 배열, 객체 가능
   const [form, setForm] = useState({
      name:"exName",
      pwd:"exPwd",
      mail:"exMail",
   });

   const changeNm = (e) => {
      const {value} = e.target;
   }

   const changePw = (e) => {
      const {value} = e.target;
   }

   const changeMail = (e) => {
      const {value} = e.target;
   }

   const onReset = () => {
      idRef.current.focus();
   }

   return (
      <div>
         <h2>input 여러개 관리</h2>
         <p>
            <input type="text" onChange={changeNm} value={form.name} ref={idRef}/>
            <input type="text" onChange={changePw} value={form.pwd}/>
            <input type="text" onChange={changeMail} value={form.mail}/>
            <button onClick={onReset}>초기화</button>
         </p>
         <h4>이름 : {form.name}</h4>
         <h4>비번 : {form.pwd}</h4>
         <h4>메일 : {form.mail}</h4>
      </div>
   );
};

export default Test14;