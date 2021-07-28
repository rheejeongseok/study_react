import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AlertModal from './AlertModal';

const Container = styled.form`
   border:1px solid black;
`;

const EditUser2 = ({mData, setMdata, open, setOpen, setFlag, onMod}) => {

   const focus = useRef();
   const [mod, setMod] = useState(mData)
   const {name, jobs, ult} = mod;

   const onSubmit = (e) => {
      e.preventDefault();
      onMod(mod);
   }

   const onC = (e) => {
      const {name, value} = e.target;
      setMod({...mod,[name]:value})
   }

   useEffect(() => {
      setMod(mData)
   },[mData])
   
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
            <Button variant="contained" type="submit">수정</Button>
            <Button variant="contained" onClick={() => setFlag(false)}>취소</Button>
         </div>
         <AlertModal open={open} setOpen={setOpen} />
      </Container>
   );
};

export default EditUser2;