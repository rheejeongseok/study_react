import React, { useState } from 'react';

const Test03 = () => {

   const [name, setName] = useState("홍길동");
   const [color, setColor] = useState("red");

   const click01 = (name) => {
      setName(name)
   }

   const click02 = (color) => {
      setColor(color)
   }

   const click03 = () => {

      console.log(this)
   }

   return (
      <div>
         <h3 style={{color:color}}>이름 : {name} / 색상 : {color}</h3>
         <p>
            <button onClick={() => click01("강호동")}>강호동</button>
            <button onClick={() => click01("유재석")}>유재석</button>
            <button onClick={() => click01("이효리")}>이효리</button>
         </p>
         <p>
            <button onClick={() => click02("lime")}>lime</button>
            <button onClick={() => click02("tomato")}>tomato</button>
            <button onClick={() => click02("skyblue")}>skyblue</button>
         </p>
         <p>
            <button onClick={click03}>테스트</button>
         </p>
      </div>
   );
};

export default Test03;

/* 
   class 
      상태값  : 유동으로 값이 변경될 경우 - state
      state = {count : 0} - 선언
      this.setState({count:10}) - 변경

   funciton
      const [state, setState] = useState(초기값)
      const [count , setCount] = useState(0)
      count = 0
      setCount(10)
*/