import React, { createContext, useState } from 'react';

export const ColorConText = createContext();

const ColorProvider = (props) => {

   const [color, setColor] = useState('green');

   const onColor = (text) => {
      setColor(text)
   }

   return (
      <ColorConText.Provider value={{color, onColor}}>
         {props.children}
      </ColorConText.Provider>
   );
};

export default ColorProvider;