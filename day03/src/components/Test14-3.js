import React, { useRef, useState } from 'react';

const Test14 = () => {

   const idRef = useRef();
   //  상태 초기값, 숫자, 문자, 배열, 객체 가능
   const [form, setForm] = useState({
      name:"exName",
      pwd:"exPwd",
      mail:"exMail",
   });
   //  비구조 할당 ㅇ.ㅇ
   const {name, pwd, mail} = form;

   const changeNm = (e) => {
      const {value} = e.target;
      setForm({...form, name:value})
   }

   const changePw = (e) => {
      const {value} = e.target;
      setForm({...form, pwd:value})
   }

   const changeMail = (e) => {
      const {value} = e.target;
      setForm({...form, mail:value})
   }

   const onReset = () => {
      idRef.current.focus();
      setForm({name:'', pwd:'', mail:''});
   }

   return (
      <div>
         <h2>input 여러개 관리</h2>
         <p>
            <input type="text" onChange={changeNm} value={name} ref={idRef}/>
            <input type="text" onChange={changePw} value={pwd}/>
            <input type="text" onChange={changeMail} value={mail}/>
            <button onClick={onReset}>초기화</button>
         </p>
         <h4>이름 : {name}</h4>
         <h4>비번 : {pwd}</h4>
         <h4>메일 : {mail}</h4>
      </div>
   );
};

export default Test14;