import React, { useMemo, useState } from 'react';

const Test7 = () => {
    const [cnt1 , setCnt1] = useState(1)
    const [cnt2 , setCnt2] = useState(10)

    const isEven = useMemo(() => {
        console.log( 'test ')
        console.log( cnt1 )
        return cnt1 % 2 === 0
    },[cnt1])


    return (
        <div>
            <h2> {cnt1 } </h2>        
            <button onClick={() => setCnt1( cnt1 + 1)}> 증가 </button>
            <h2> {cnt2 } </h2>        
            <button onClick={() => setCnt2( cnt2 + 1)}> 증가 </button>
            <hr />
            { isEven ? '짝수':'홀수'}
        </div>
    );
};

export default Test7;

/*  
    useMemo : return 값을 기억한다 
    useCallback : 함수를 기억
*/