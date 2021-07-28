import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex; width:1300px; margin:0 auto;
    flex-direction: row;
    flex-wrap: wrap;
    article {
        width:300px; border:1px solid #dcdcdc;  margin-right:10px; padding:5px;
        a {
            h2 { font-size:18px; margin-bottom:10px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden}
            img { width:300px; height:160px; }
            p { margin-top:15px; line-height:1.6 }
        }
        &::nth-child(4n) {margin-right:0}
    }
`

const Test6m = () => {

   const [data, setData] = useState([])

   useEffect(() => {
      getData();
   },[])

   const getData = () => {
      axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=f14625484cec4722b32915a4977d05fb')
      .then(res => {
         setData(res.data.articles)
      })
   }

   return (
      <Container>
         {
            data.map((e,i) => <article key={i}>
               <a href={e.url} target="_blank">
                  <h2>{e.title}</h2>
                  <img src={e.urlToImage} alt={e.title} />
                  <p>{e.description}</p>
               </a>
            </article>)
         }
      </Container>
   );
};

export default Test6m;