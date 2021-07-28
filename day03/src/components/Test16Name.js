import React from 'react';

const Test16Name = ({name, chnName}) => {
   return (
      <div>
         이름 : <input type="text" value={name} onChange={chnName}/>
      </div>
   );
};

export default Test16Name;