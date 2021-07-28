import React, { useState } from 'react';

const Test17 = () => {

   const [data, setData] = useState([
      {name:"grd", age:21},
      {name:"abc", age:22},
      {name:"Def", age:23},
      {name:"ggz", age:24},
   ]);

   return (
      <div>
         {
            data.map((e, i) => <div key={i}>
               {i} : {e.name} : {e.age} 
            </div>)
         }
      </div>
   );
};

export default Test17;