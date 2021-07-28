import React, { useEffect, useState } from 'react';

const Test1Sub = ({onSearch}) => {

   const [text,setText] = useState('');

   const chnText = (e) => {
      const { value } = e.target;
      setText(value)
   }

   useEffect(() => {
      onSearch(text)
   },[text])

   const search = () => {
      onSearch(text)
   }

   return (
      <div>
         <input type="text" onChange={chnText} />
         <button onClick={search}>검색</button>
      </div>
   );
};

export default Test1Sub;