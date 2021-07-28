import React from 'react';
import Highlighter from 'react-highlight-words';
import { useSelector, useDispatch } from 'react-redux';
import { onSelection, onShowPart, setFdata } from '../store/module/ewi';

const PartItem = ({item}) => {

   const {label, value} = item;
   const text = useSelector(state => state.ewi.word);
   const dispatch = useDispatch();

   const onClick=()=>{
      dispatch(onSelection(false));
      dispatch(onShowPart(true));
      dispatch(setFdata(label));
   }

   return (
      <li onClick={() => onClick()}>
         <div className="parts">
            <Highlighter 
               highlightClassName="highlighter"
               searchWords={[text]}
               autoEscape={true}
               textToHighlight={label}
            />
         </div>
         <div className="icon">
            {
               value === 1 && <img src="images/list_g.png" alt="" />
            }
            {
               value === 2 && <img src="images/list_no.png" alt="" />
            }
            {
               value === 3 && <img src="images/list_call.png" alt="" />
            }
            {
               value === 4 && <img src="images/list_gp.png" alt="" />
            }
            {
               value === 5 && <img src="images/list_gb.png" alt="" />
            }
            {
               value === 6 && <img src="images/list_gpb.png" alt="" />
            }
         </div>
         
      </li>
   );
};

export default PartItem;