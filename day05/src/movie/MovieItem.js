import React from 'react';
import numeral from "numeral";
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineDash } from "react-icons/ai";

// AiOutlineArrowUp , AiOutlineArrowDown

const MovieItem = ({movie}) => {

   const {rank, movieNm, salesAmt, audiCnt, rankInten} = movie

   
   
   return (
      <tr>
         <td>{rank}</td>
         <td>{movieNm}</td>
         <td>{numeral(salesAmt).format(0,0)} 원</td>
         <td>{numeral(audiCnt).format(0,0)} 명</td>
         <td>
            {rankInten > 0 && <AiOutlineArrowUp color="tomato" />}
            {rankInten < 0 && <AiOutlineArrowDown color="lime" />}
            {rankInten === 0 && <AiOutlineDash style={{color:"grey"}} />}
            {rankInten}
         </td>
      </tr>
   );
};

export default MovieItem;