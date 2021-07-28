 import React, { createContext, useState } from 'react';

 export const ChangeColorContext = createContext()
 
 const ChangeColorProvier = (props) => {
     const [ color , setColor ] = useState('yellow')  
     
     const onColor = ( text )  => {
         setColor( text )
     }

     return (
         <ChangeColorContext.Provider value={{color , onColor}}>
             {props.children}
         </ChangeColorContext.Provider>
     );
 };
 
 export default ChangeColorProvier;