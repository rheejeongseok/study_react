import React from 'react';

const MovieView = ({mid, open}) => {

    const {thumbUrl, movieNm, openDt, moviePrdtStat, movieType, watchGradeNm, showTs, repNationCd,director,genre,dtNm} = mid

    return (
        <div className="view">
            <img src={thumbUrl} alt={movieNm} onClick={open} />
            <div>
                <h3>{movieNm}</h3>
                <ul>
                    <li><em>개봉일</em> : {openDt}</li>
                    <li><em>제작상태</em> : {moviePrdtStat}</li>
                    <li><em>영화구분</em> : {movieType}</li>
                    <li><em>관람등급</em> : {watchGradeNm}</li>
                    <li><em>상영시간</em> : {showTs}</li>
                    <li><em>제작국가</em> : {repNationCd}</li>
                    <li><em>감독</em> : {director}</li>
                    <li><em>장르</em> : {genre}</li>
                    <li><em>배급사</em> : {dtNm}</li>
                </ul>
            </div>
        </div>
    );
};

export default MovieView;