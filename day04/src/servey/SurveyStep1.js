import React from 'react';

const SurveyStep1 = ({form, onForm, onNext}) => {

    const {name, age, addr, tel} = form;

    return (
        <>
            <p><label htmlFor="name">이름 : </label><input type="text" name="name" id="name" value={name} onChange={onForm} /></p>   
            <p><label htmlFor="age">나이 : </label><input type="text" name="age" id="age" value={age} onChange={onForm} /></p>   
            <p><label htmlFor="addr">주소 : </label><input type="text" name="addr" id="addr" value={addr} onChange={onForm} /></p>   
            <p><label htmlFor="tel">연락처 : </label><input type="text" name="tel" id="tel" value={tel} onChange={onForm} /></p>   
            <p><button onClick={onNext}>다음</button></p>
        </>
    );
};

export default SurveyStep1;