import React, { useRef, useState } from 'react';

const Test14 = () => {

   const [name, setName] = useState("exName");
   const [pwd, setPwd] = useState("");
   const [mail, setMail] = useState("exMail@mail.do");
   const idRef = useRef();

   const changeNm = (e) => {
      const {value} = e.target;
      setName(value);
   }

   const changePw = (e) => {
      const {value} = e.target;
      setPwd(value);
   }

   const changeMail = (e) => {
      const {value} = e.target;
      setMail(value)
   }

   const onReset = () => {
      setName("");
      setPwd("");
      setMail("");
      idRef.current.focus();
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