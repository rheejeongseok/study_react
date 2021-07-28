import React from 'react';
import styled, { css } from 'styled-components';

const Test7My = () => {

   const red = "red";
   const blue = "blue";
   
   const fc = (text, ...value) => {
      console.log(text)
      console.log(value)
   }

   fc`제가 좋아하는 색은 ${red}와 ${blue}입니다`

   const Circle = styled.div`
      width:5rem; height:5rem; background:${props => props.color ? props.color : 'red'}; border-radius:50%;
      ${props => props.size && 
      css`
         width:10rem; height:10rem;
      `}
   `;

   const Button = styled.button`
      display:inline-flex; outline:none; border:none; border-radius:4px; color:white;
      font-weight:bold; cursor:pointer; padding:0 1rem; height:2.25rem; font-size:1rem;
      background:red; transition:1s;

      &:hover {
         background:blue; font-size:2rem;
      }
   `;

   return (
      <div>
         <Circle>가나다라</Circle>
         <Circle color="blue">기니디리</Circle>
         <Circle color="green" size>두루무부</Circle>
         <Button>우슴만</Button>
      </div>
   );
};

export default Test7My;