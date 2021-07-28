import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
   width:300px; padding:20px; border:1px solid black; margin:20px
`
const Box1 = styled.section`
   padding: 20px; background: pink; transition: 0.5s; margin-bottom:15px;
   &:hover {
      background: tomato;
   }
`
const Box2 = styled('article')`
   padding: 15px; background: yellowgreen; transition: 0.5s; box-sizing:border-box;
   width:100%; margin-bottom: 10px;
   &:hover {
      width:150%; background:lime;
   }
`
const Button = styled('button')`
   padding:15px 50px; border:none; background: black; color:red; 
   transition: 0.5s;
   &:hover {
      background: red; color:white;
   }
`

const Test7 = () => {
   return (
      <div>
         <h2> styled - components </h2>
         <Container>
            <Box1>안녕하세요</Box1>
            <Box2>안녕하세요</Box2>
            <Button>확인</Button>
         </Container>
      </div>
   );
};

export default Test7;