import React from 'react';
import Test02SubRe from './Test02SubRe';

const Test02Re = () => {
   return (
      <div>
         <Test02SubRe name="사람1" gId="광광울음" addr="서울 저기 어디" tel="01000001111" sex="남자" color="#bbb"/>
         <hr/>
         <Test02SubRe name="사람2" age={32} addr="서울 여기 저기" tel="12345678901" sex="여자" color="#abc" />
         <hr/>
         <Test02SubRe name="사람3" age={303} gId="저기저쪽" tel="1230000444" sex="혼종" color="#098" />
      </div>
   );
};

export default Test02Re;