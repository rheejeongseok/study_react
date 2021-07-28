import React, { useState } from 'react';

const Test12Re = () => {

   const [show, setShow] = useState(false);
   const [is, setIs] = useState(false);

   const showHide = () => {
      setShow(!show)
   }

   return (
      <div>
         <ChkBox show={show} showHide={showHide} />
         <BtnBox />
         <ShowBox show={show} />
      </div>
   );
};

const ChkBox = ({show, showHide}) => {
   return(
      <div>
         <label htmlFor="testId"></label><input type="checkbox" id="testId" checked={show} onChange={showHide} />
      </div>
   )
}

const BtnBox = () => {
   return(
      <div>
         <button>누르기</button>
      </div>
   )
}

const ShowBox = ({show}) => {
   return(
      <div>
         {
            show ? "여기가 보일 것이여 ㅇ.ㅇ" : "안보이나"
         }
      </div>
   )
}

export default Test12Re;