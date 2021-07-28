import React from 'react';

const SurveyStep2 = ({form, onForm, onNext, onPrev}) => {

    const {job, email, sex, inter} = form;

    return (
        <>
            <p><label htmlFor="job">직업 : </label><input type="text" name="job" id="job" value={job} onChange={onForm} /></p>   
            <p><label htmlFor="email">이메일 : </label><input type="text" name="email" id="email" value={email} onChange={onForm} /></p>   
            <p><label htmlFor="sex">성별 : </label><input type="text" name="sex" id="sex" value={sex} onChange={onForm}  /></p>   
            <p><label htmlFor="inter">관심분야 : </label><input type="text" name="inter" id="inter" value={inter} onChange={onForm}  /></p>   
            <p><button onClick={onPrev}>이전</button><button onClick={onNext}>다음</button></p>
        </>
    );
};

export default SurveyStep2;