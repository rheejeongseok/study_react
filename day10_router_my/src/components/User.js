import React from 'react';
import {useParams} from 'react-router-dom';

const User = ({data}) => {

   const {sub} = useParams();

    return (
        <div>
            <h1>User page e da.</h1>
            <hr />
            {
               data.filter(e => e.title === sub)
                   .map(e => <div key={e.title}>
                     <h2>Title : {e.title}</h2>
                     <h3>Summary : {e.info}</h3>
                   </div>)
            }
        </div>
    );
};

export default User;