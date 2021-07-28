import React from 'react';
import PropTypes from 'prop-types';

const Test02Sub = ({name, age, addr, tel, sex, color, done}) => {

   return (
      <div style={{width:400, padding:20, border:`1px solid ${color}`, margin:"10px auto"}}>
         <h2>{name}의 신상명세서</h2>
         <ul>
            <li>이름 : {name}</li>
            <li>나이: {age}</li>
            <li>주소: {addr}</li>
            <li>번호 : {tel}</li>
            <li>성별 : {sex}</li>
            <li>색상 : {color}</li>
            <li>여부 : {done ? "OK" : "NO"}</li>
         </ul>
      </div>
   );
};

Test02Sub.propTypes = {
   name: PropTypes.string.isRequired,
   age: PropTypes.number.isRequired,
   addr: PropTypes.string,
   tel: PropTypes.string,
   sex: PropTypes.string,
   color: PropTypes.string,
   done: PropTypes.bool,
   
};

Test02Sub.defaultProps = {
   name: "초기 네임",
   age: "초기 30",
   addr: "초기 주소",
   tel: "초기 0100003345",
   sex: "초기 나맞",
   color: "red",
   done: true,
 };

export default Test02Sub;

/* 
   const Test02Sub = (props) => {
      return (
         <div style={{width:400, padding:20, border:`1px solid ${props.color}`, margin:"10px auto"}}>
            <h2>{props.name}의 신상명세서</h2>
            <ul>
               <li>이름 : {props.name}</li>
               <li>주소: {props.addr}</li>
               <li>번호 : {props.tel}</li>
               <li>성별 : {props.sex}</li>
               <li>색상 : {props.color}</li>
               <li>여부 : {props.done ? "OK" : "NO"}</li>
            </ul>
         </div>
      );
   };
*/

/* 
   
const Test02Sub = (props) => {
      const {name, age, addr, tel, sex, color, done} = props
      return (
         <div style={{width:400, padding:20, border:`1px solid ${color}`, margin:"10px auto"}}>
            <h2>{name}의 신상명세서</h2>
            <ul>
               <li>이름 : {name}</li>
               <li>나이: {age}</li>
               <li>주소: {addr}</li>
               <li>번호 : {tel}</li>
               <li>성별 : {sex}</li>
               <li>색상 : {color}</li>
               <li>여부 : {done ? "OK" : "NO"}</li>
            </ul>
         </div>
      );
   };
*/