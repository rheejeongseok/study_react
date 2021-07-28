import React from 'react';
import { useSelector } from 'react-redux';
import {CSSTransition} from 'react-transition-group';

const PartContent = () => {
   console.log("partcontent")
   /* 1 : list_g, 2 : list_no, 3 : list_call, 4 : list_gp, 5 : list_gb, 6 : list_gpb */
   const data = useSelector(state => state.ewi.fData);
   const {label, value} = data;
   const showPart = useSelector(state => state.ewi.showPart)
   
   return (
      <>
      {
         data.value === undefined &&
         <div className="main">
            찾으시는 부품을 입력하면
            <br />
            플랜별 가입여부 결과가 나옵니다.
         </div>          
      }

      <CSSTransition in={showPart} timeout={1000}>
         <div className="partBox">
         {
            value === 1 && <img src="images/avail_g.png" alt="" />
         }
         {
            value === 2 && <img src="images/avail_no.png" alt="" />
         }
         {
            value === 3 && <img src="images/avail_call.png" alt="" />
         }
         {
            value === 4 && <img src="images/avail_gp.png" alt="" />
         }
         {
            value === 5 && <img src="images/avail_gb.png" alt="" />
         }
         {
            value === 6 && <img src="images/avail_gpb.png" alt="" />
         }

         {
            value === 1 && 
            <div className="mainTxt">
               <span className="partNm">{label}</span>는(은)
               <br />
               <span className="txtBlue">골드 플랜</span>에서
               <br />
               <span>보상이 가능합니다.</span>
            </div>
         }
         {
            value === 2 && 
            <div className="mainTxt">
               <span className="partNm no">{label}</span>는(은)
               <br />
               <span>보상이 가능하지 않습니다.</span>
               <br />
               <div className="subTxt">다른 부품을 입력해보세요!</div>
            </div>
         }
         {
            value === 3 && 
            <div className="mainTxt">
               <span>이 부품은</span>
               <br />
               <span>고객센터(<a href="tel:15442262" className="callTxt">1544-2262</a>)로</span>
               <br />
               <span>문의해주세요.</span>
            </div>
         }
         {
            value === 4 && 
            <div className="mainTxt">
               <span className="partNm">{label}</span>는(은)
               <br />
               <span className="txtBlue">골드 플랜, 파워트레인 플랜</span>에서
               <br />
               <span>보상이 가능합니다.</span>
            </div>
         }
         {
            value === 5 && 
            <div className="mainTxt">
               <span className="partNm">{label}</span>는(은)
               <br />
               <span className="txtBlue">골드 플랜, 일반부품 플랜(국산)</span>
               <br />
               <span>에서 보상이 가능합니다.</span>
            </div>
         }
         {
            value === 6 && 
            <div className="mainTxt">
               <span className="partNm">{label}</span>는(은)
               <br />
               <span className="txtBlue">
                  골드 플랜, 파워 플랜
                  <br />
                  일반부품 플랜(국산)
               </span>
               <br />
               <span>에서 보상이 가능합니다.</span>
            </div>
         }
         </div>
         </CSSTransition>
      
      </>
   );
};

export default PartContent;