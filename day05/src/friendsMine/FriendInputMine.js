import React, { useState } from 'react';

const FriendInputMine = ({one, onChn, onAdd}) => {

   const {name, age, image} = one;

   /* 
   const nameRef = useRef()

   const [inputs, setInputs] = useState({
      name:'',
      age:'',
      image:''
   })

   const {name, age, image} = inputs 
   
   const onText = (e) => {
      const {value, name} = e.target
      setInputs({
         ...inputs,[name]:value
      });
   }

   const onAdd= (e) => {
      e.preventDefault();
      if(!name) return;
      
      setInputs({
         name:'',
         age:'',
         image:''
      });
      nameRef.current.focus();
   }
   
   */


   return (
      <form className="formadd" onSubmit={onAdd}>
         <p>
            <label htmlFor="">이름 : </label>
            <input type="text" name="name" value={name} onChange={onChn} />
         </p>
         <p>
            <label htmlFor="">나이 : </label>
            <input type="text" name="age" value={age} onChange={onChn} />
         </p>
         <p>
            <label htmlFor="">사진 : </label>
            <input type="text" name="image" value={image} onChange={onChn} />
         </p>
         <p>
            <button type="submit">추가</button>
         </p>
      </form>
   );
};

export default FriendInputMine;