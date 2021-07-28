import React from 'react';
import { useSelector } from 'react-redux';
import PartItem from '../components/PartItem';
import {CSSTransition} from 'react-transition-group';

const PartList = () => {
   console.log("partlist")
   const fParts = useSelector(state => state.ewi.fParts)
   const showSelection = useSelector(state => state.ewi.showSelection);
   const word = useSelector(state => state.ewi.word);

   return (
      <>
      {
         showSelection && 
         <div className="partWrap">
            <ul className={`partList`}>
               {
                  word === '' ? 
                  <li className="noParts">검색어를 입력해 주세요.</li>
                  :
                  fParts.map((e,i) => <PartItem key={i} item={e} />)
               }
            </ul>
         </div>
      }
      </>
   );
};

export default PartList;