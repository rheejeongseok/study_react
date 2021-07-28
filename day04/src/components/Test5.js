import React, { useRef, useState } from 'react';

const Test5 = () => {

   const no = useRef(1);
   const ipRef = useRef();
   const [data, setData] = useState([]);
   const [text, setText] = useState("");

   const onText = (e) => {
      const {value} = e.target;
      setText(value)
   }

   const onAdd = (e) => {
      e.preventDefault()
      setData([
         ...data,{id:no.current++,
         text
      }
      ])
      setText("");
      ipRef.current.focus();
   }

   return (
      <div>
         <form onSubmit={onAdd}>
            <input type="text" value={text} onChange={onText} ref={ipRef} />
            <button type="submit" >추가</button>
         </form>
         {
            data.map(e => <p key={e.id}>
               {e.id} / {e.text}
            </p>)
         }
      </div>
   );
};

export default Test5;