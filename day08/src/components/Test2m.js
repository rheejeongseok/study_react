import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test2m = () => {

   const [posts, setPosts] = useState([])
   const [loading, setLoading] = useState(true)
   const [error,setError] = useState('');

   useEffect(() => {
      getData()
   }, []);

   const getData = () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(res => {
            console.log("succes")
            setPosts(res.data)
            setTimeout(() => {
               setLoading(false)
            }, 2000)
            setError('')
         })
         .catch( error => {
            console.log("error")
            setPosts([])
            setLoading(true)
            setError('데이터가 없습니다.')
         })
   }

   return (
      <div>
         {
            posts && loading ? <h2>로딩중</h2> : posts.map(e => <div key={e.id}>{e.title}</div>)
         }
         {
            error ? error : null
         }
      </div>
   );
};

export default Test2m;