import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   border:1px solid #999;
   width:${props => props.width};
   margin:10px;
   padding:25px;
   h2{
      font-size:50px;
   }
`;

const Button = styled.button`
   margin:5px; font-size:40px; padding:0 30p 20px; cursor:pointer;
   outline:none; border:0;

   &.up::after { content:"📤"}
   &.down::after { content:"📥"}

   &:hover {
      background:tomato;
   }

   &:disabled {
      filter:grayscale(100%);
      background:#999;
      cursor:not-allowed;
   }
`

const Input = styled.input`
   width:100px; height:30px; padding:10px 5px; margin-right:10px;
`

const Test9My = () => {

   const [count, setCount] = useState(1);
   const [max, setMax] = useState(10);
   const [min, setMin] = useState(0);
   const increment = () => {
      setCount(count > max ? max : count + 1)
   }
   const decrement = () => {
      setCount(count < min ? min : count - 1)
   }

   const [usr, setUsr] = useState({
      name:'', pwd:''
   });

   const {name, pwd} = usr;

   const onUsr = (e) => {
      const {name, value} = e.target;
      setUsr({...usr,[name]:value})
   }

   return (
      <>
         <Container width="400px">
            <h2>숫자 : {count}</h2>
            <Button className="up" onClick={increment} disabled={count===max}></Button>
            <Button className="down" onClick={decrement} disabled={count===min} ></Button>
         </Container>
         <Input type="text" name="name" value={name} onChange={onUsr} />
         <Input type="password" name="pwd" value={pwd} onChange={onUsr} />
         <Button disabled={pwd.length < 7} >submit</Button>
      </>
      
   );
};

export default Test9My;