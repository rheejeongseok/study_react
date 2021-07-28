import React from 'react';
import '../utils/css/reset.css';
import '../utils/css/contents.css';
import Search from './Search';
import PartList from './PartList';
import Part from './Part';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import {CSSTransition} from 'react-transition-group';

const EWI = () => {

   const showSelection = useSelector(state => state.ewi.showSelection);
   const html = document.querySelector('html');
   window.innerWidth > 480 && html.classList.add('pc');

   return (
      <div className="partsWrap">
         <div className="partHead">
            <div className="text">안녕하세요!</div>
            <div className="text">어떤 부품을 찾으세요?</div>
            <div className="icons">
               <div>
                  <div className="iconItem">
                     <img src="images/icon_g.png" alt="" />
                     <span>골드 플랜</span>
                  </div>
                  <div className="iconItem">
                     <img src="images/icon_p.png" alt="" />
                     <span>파워트레인 플랜</span>
                  </div>
               </div>
               <div>
                  <div className="iconItem">
                     <img src="images/icon_b.png" alt="" />
                     <span>일반부품 플랜(국산)</span>
                  </div>
                  <div className="iconItem">
                     <img src="images/icon_no.png" alt="" />
                     <span>불가능</span>
                  </div>
                  <div className="iconItem">
                     <img src="images/icon_call.png" alt="" />
                     <span>상담문의</span>
                  </div>
               </div>
            </div>
            <Search />
            <CSSTransition in={showSelection} timeout={500}>
            <PartList />
            </CSSTransition>
         </div>
         <div className="partBody">
            <Part />
         </div>
         <Footer />
      </div>
   );
};

export default EWI;