import React, { useState } from 'react';
import movie from '../api/movie';

const Test18 = () => {

   const [data, setData] = useState(movie);
   console.log(data)
   const [search, setSearch] = useState("예시");

   const onSearch = (e) => {
      const { value } = e.target;
      setSearch(value)
      const testArr = [...data];
      const nData = testArr.filter((e) => e.title.indexOf(value) > -1)
      console.log(nData)
      
      
   }

   return (
      <div>
         <h2>검색 : <input type="text" value={search} onChange={onSearch}/></h2>
         <div className="movie_list">
         {
            data.map((e, i) => <div key={i}>
               <img src={e.poster} alt=""/>
               <span>{e.title}</span>
               <span>{e.actor}</span>
               <span>{e.date}</span>
               <span>{e.director}</span>
            </div>)
         }
         </div>
      </div>
   );
};

export default Test18;