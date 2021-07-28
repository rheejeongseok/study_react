import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test4m = () => {

   const [post, setPost] = useState({});
   const [load, setLoad] = useState(true);
   const [err, setErr] = useState('');
   const [id, setId] = useState(1);
   const [num, setNum] = useState(1);

   useEffect(() => {
      getData()
   },[num]);

   const getData = () => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${num}`)
      .then(res => {
         setPost(res.data)
         setLoad(false);
         setErr('');
      })
      .catch(err => {
         setPost({})
         setLoad(true)
         setErr('not found url')
      })
   }

   return (
      <div>
         <input type="text" value={id} onChange={e => setId(e.target.value)} />
         <button onClick={() => setNum(id)}>클릭</button>
         {
            post && load ? <h2>loading</h2> : <h2>{post.title}</h2>
         }
      </div>
   );
};

export default Test4m;