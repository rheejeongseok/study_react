import React from 'react';

const MovieItem = ({data, onDel}) => {

    const {no, actor, date, director, title, poster} = data

    return (
        <article>
            <div className="left">
                <img src={poster} alt="" />
            </div>
            <div className="right">
                <h3>{title}</h3>
                <ul>
                    <li>출연진 : {actor}</li>
                    <li>감독 : {director}</li>
                    <li>개봉일 : {date}</li>
                </ul>
                <button onClick={() => onDel(no)}>제거</button>
            </div>
        </article>
    );
};

export default MovieItem;