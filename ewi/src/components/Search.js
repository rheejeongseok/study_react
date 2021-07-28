import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { word, onFparts, onSelection, onShowPart, initSearchData } from '../store/module/ewi';

const Search = () => {
   console.log("search")
   const text = useSelector(state => state.ewi.word)
   const data = useSelector(state => state.ewi.parts)
   const dispatch = useDispatch();

   const onChan = (e) => {
      dispatch(onFparts(e.target.value))
   }

   const onFocus = () => {
      dispatch(onSelection(true));
      dispatch(onShowPart(false));
      dispatch(initSearchData());
   }
   
   return (
      <div className="findWrap">
         <input type="text" id="searchIp" value={text} 
         onChange={(e) => onChan(e)}
         onFocus={() => onFocus()} 
         autoComplete="off"
         />
      </div>
   );
};

export default React.memo(Search);