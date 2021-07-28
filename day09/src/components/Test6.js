import React, { useEffect, useReducer } from 'react';
import axios from 'axios'

const initialState = {
    loading: true , 
    data : {} ,
    error:''
}

const reducer = (state , action) => {
    switch( action.type ) {
        case 'SUCCESS':
            return {
                loading:false , 
                error : '',
                data : action.payload
            }
        case  'ERROR' :
            return {
                loading:true , 
                error:'데이터를 찾을수 없습니다.',
                data:{}
            }    
        default:
            return state 
    }
}
// 교체 할 상태 값(payload)로 일반적으로 통해서 작성한다 
const Test6 = () => {
    const [state , dispatch ] = useReducer( reducer , initialState)
    
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
             .then( res => {
                dispatch({type:'SUCCESS', payload : res.data })
             })
             .catch( error => {
                dispatch({type:'ERROR'})
             })
    },[])
    
    return (
        <div>
            <h2>{ state.data && state.loading ? '롱딩중..': state.data.title  }</h2>
            
             <p>
                 {state.error ? state.error : null }
             </p>       
             
        </div>
    );
};

export default Test6;