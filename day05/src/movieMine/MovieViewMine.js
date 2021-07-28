import React from 'react';
import numeral from "numeral";

const MovieViewMine = ({view,showModal}) => {

   const {thumbUrl, movieNm, startDate, moviePrdtStat, movieType, watchGradeNm, showTm, repNationCd, director, genre, dtNm} = view

   return (
      <div className="view">
         <img src={thumbUrl} alt={movieNm} onClick={showModal} />
         <div>
            <h3>{movieNm}</h3>
            <ul>
               <li><em>개봉일</em> : {startDate}</li>
               <li><em>제작상태</em> : {moviePrdtStat}</li>
               <li><em>영화구분</em> : {movieType}</li>
               <li><em>관람등급</em> : {watchGradeNm}</li>
               <li><em>상영시간</em> : {numeral(showTm).format('00:00:00')}</li>
               <li><em>제작국가</em> : {repNationCd}</li>
               <li><em>감독</em> : {director}</li>
               <li><em>장르</em> : {genre}</li>
               <li><em>배급사</em> : {dtNm}</li>
            </ul>
         </div>
      </div>
   );
};

export default MovieViewMine;