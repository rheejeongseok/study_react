import React, { memo } from 'react';
import PartCaution from './PartCaution';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

const Footer = () => {
   console.log("footer")

   // const showPart = useSelector(state => state.ewi.showPart)

   return (
      <div className="footer">
         {/* <CSSTransition in={showPart} timeout={1000}> */}
         <PartCaution />
         {/* </CSSTransition> */}
         <div className="copyright">
            Confidential, unpublished property of AutoHands.  
            <br />
            © Copyright 2019 AutoHands
         </div>
      </div>
      
   );
};

export default memo(Footer);