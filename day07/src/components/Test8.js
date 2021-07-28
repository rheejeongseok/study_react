import React from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
   border: 1px solid black; padding:30px; margin:10px;
   width:${props => props.w};
   background:${props => props.bg ? props.bg : "red"}
`
const Box = styled('button')`
   width:${props => props.w}; background:${props => props.bg ? props.bg : "black"}; 
   color:white; height:40px; margin:10px; border:none; 
   border:1px solid ${props => props.bg ? props.bg : "black"};

   /*  주어진 속성에 별도의 css를 설정할 수 있다. */
   ${
      props => props.dog && css`
         width:200px; height:200px; border-radius:100%;
         font-size:25px; cursor:pointer; transition:0.3s; 
         &:hover {
            background:lime;
            color:#fff;
         }
      `
   }
`




const Test8 = () => {
   return (
      <div>
         <Container w="700px" bg="pink">
            <Box w="200px">버튼</Box>
            <Box w="150px" bg="yellow">버튼</Box>
            <Box w="100px" bg="tomato">버튼</Box>
            <Box w="300px" bg="green">버튼</Box>
            <Box dog>버튼</Box>
         </Container>
      </div>
   );
};

export default Test8;