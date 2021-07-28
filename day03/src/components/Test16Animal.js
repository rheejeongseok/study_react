import React from 'react';

const Test16Animal = ({ani, chnAni}) => {
   return (
      <div>
         동물 : <input type="text" value={ani} onChange={chnAni}/>
      </div>
   );
};

export default Test16Animal;