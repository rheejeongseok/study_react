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

   /* const changeIp = (e) => {
      const {name, value} = e.target;
      console.dir(e.target)
      //  setForm({...form, name:value});
      //   setForm({...form, ["name"]:value});
      setForm({...form, [name]:value});
   } */
   const changeIp = (e) => {
      const {value} = e.target;
      const name = e.target.dataset['key'];
      console.dir(e.target)
      /*  setForm({...form, name:value});*/
      /*  setForm({...form, ["name"]:value});*/
      setForm({...form, [name]:value});
   }

   const onReset = () => {
      idRef.current.focus();
      setForm({name:'', pwd:'', mail:''});
   }

   return (
      <div>
         <h2>input 여러개 관리</h2>
         <p>
            <input type="text" onChange={changeIp} value={name} ref={idRef} name="name" data-key="name"/>
            <input type="text" onChange={changeIp} value={pwd} name="pwd" data-key="pwd"/>
            <input type="text" onChange={changeIp} value={mail} name="mail" data-key="mail"/>
            <button onClick={onReset}>초기화</button>
         </p>
         <h4>이름 : {name}</h4>
         <h4>비번 : {pwd}</h4>
         <h4>메일 : {mail}</h4>
      </div>
   );
};

export default Test14;