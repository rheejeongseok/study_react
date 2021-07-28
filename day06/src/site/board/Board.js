import React, { useState } from 'react';

const Board = () => {

   const [blist, setBlist] = useState([
      {id:1, title:'테스트1 입니다.', writer:'이정석', reply:0, heart:0, con:'테스트1 입니다 테스트1이빈다.', date:'2021-06-04'},
      {id:2, title:'', writer:'글쓴이1', reply:0, heart:0, con:'테스트를 합니다 연습용이구요', date:'2021-05-02'},
      {id:3, title:'', writer:'테스터0202', reply:0, heart:4, con:'연습하고 해서 한다', date:'2021-04-10'},
      {id:4, title:'', writer:'잠깐2020', reply:0, heart:8, con:'지금 시간은 15시 59분 입니다.', date:'2021-03-15'},
      {id:5, title:'', writer:'배아배아', reply:0, heart:2, con:'내일은 토요일 입니다.', date:'2021-02-16'},
   ])

   return (
      <div>
         
      </div>
   );
};

export default Board;