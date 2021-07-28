import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test5 = () => {
    const [data , setData] = useState([])
    const [text , setText] = useState('css')

    useEffect( ()  => {
        getData()
    },[text])

    const getData = ()  => {
        axios.get(`http://hn.algolia.com/api/v1/search?query=${text}`)
             .then( res => {
                 setData( res.data.hits )
             })
    }

    return (
        <div>
            <input type="text" onChange={e => setText( e.target.value)} value={text} />
            {
                data.map( item => <p>
                        {item.title}
                </p>)
            }
        </div>
    );
};

export default Test5;