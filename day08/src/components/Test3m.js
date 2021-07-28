import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test3m = () => {

   const [post, setPost] = useState({});
   const [load,setLoad] = useState(true);
   const [error,setError] = useState('');
   const [id, setId] = useState(1);

   useEffect(() => {
      getData()
   }, [id]);

   const getData = () => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
         setPost(res.data)
         setLoad(false)
         setError('')
      })
      .catch( error => {
         setPost({})
         setLoad(true)
         setError('address not found')
      })
   }

   return (
      <div>
         <input type="text" value={id} onChange={e => setId(e.target.value)} />
         {
            post && load ? <h2>로딩중</h2> : <h2>{post.title}</h2>
         }
      </div>
   );
};

export default Test3m;