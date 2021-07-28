import React from 'react';
import MovieItemMine from './MovieItemMine';

const MovieListMine = ({movies,chnView}) => {
   return (
      <div className="list">
         <table>
            <colgroup>
               <col className="w1" />
               <col className="w2" />
               <col className="w3" />
               <col className="w4" />
               <col className="w5" />
            </colgroup>
            <thead>
               <tr>
                  <th>순위</th>
                  <th>영화명</th>
                  <th>매출액</th>
                  <th>관객수</th>
                  <th>증감률</th>
               </tr>
            </thead>
            <tbody>
               {
                  movies.map(e => <MovieItemMine key={e.rank} movie={e} chnView={chnView} />)
               }
            </tbody>
         </table>
         
      </div>
   );
};

export default MovieListMine;