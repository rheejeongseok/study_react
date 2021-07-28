import React, { useEffect, useState } from 'react';

const Test1SubMy = ({searchWord}) => {

   const [word, setWord] = useState('');

   const chnWord = (e) => {
      setWord(e.target.value);
   }

   useEffect(() => {
      searchWord(word);
   },[word])

   return (
      <div>
         <input type="text" value={word} onChange={chnWord} />
      </div>
   );
};

export default Test1SubMy;