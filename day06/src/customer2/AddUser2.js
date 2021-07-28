import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AlertModal from './AlertModal';

const Container = styled.form`
   border:1px solid black;
`;

const AddUser2 = ({users, addUser, open, setOpen}) => {

   const focus = useRef();
   const [c,setC] = useState({
      name:'', jobs:'', ult:''
   })
   const [dupl,setDupl] = useState(false)

   const {name, jobs, ult} = c

   const onC = (e) => {
      const {name, value} = e.target;
      setC({...c,[name]:value})
   }

   const onSubmit = (e) => {
      e.preventDefault();
      
      for(let user of users){
         if(user.name === c.name){
            setOpen(true);
            return false;
         } 
      }

      addUser(c)
      setC({
         name:'', jobs:'', ult:''
      })
      focus.current.focus();
   }

   return (
      <Container onSubmit={onSubmit}>
         <ul>
            <li>
               <TextField id="name" label="챔피언 이름" name="name" value={name} onChange={onC} ref={focus} placeholder="Name" multiline variant="outlined"/>
            </li>
            <li>
               <TextField id="jobs" label="하는일" name="jobs" value={jobs} onChange={onC} placeholder="Jobs" multiline variant="outlined" />
            </li>
            <li>
               <TextField id="ult" label="궁극기" name="ult" value={ult} onChange={onC} placeholder="Ultimate" multiline variant="outlined" />
            </li>
         </ul>
         <div>
            <Button variant="contained" type="submit">등록</Button>
         </div>
         <AlertModal open={open} setOpen={setOpen} />
      </Container>
   );
};

export default AddUser2;