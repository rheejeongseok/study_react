import React from 'react';
import { AiOutlineDown } from "react-icons/ai";
import { useSpring, animated } from 'react-spring';

const ModalMine = ({view,showModal,modal}) => {

   const {thumbUrl, movieNm} = view;

   const test = useSpring({
      to: {opacity:1},
      from: {opacity:0},
      config: {duration:500},
      reset:true,
      reverse:modal
   })

   return (
      <animated.div style={test}>
         <div className={`modal ${modal && "show"}`}>
            <div className="inner">
               <a href="javascript:;" className="close" onClick={showModal}><AiOutlineDown /></a>
               <h2>{movieNm}</h2>
               <img src={thumbUrl} alt={movieNm} />
            </div>
         </div>
      </animated.div>
   );
};

export default ModalMine;