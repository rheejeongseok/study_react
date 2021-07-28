import React, { useState } from 'react';
import "../utils/css/reset.css";
import "./style.css";
import SurveyStep1 from './SurveyStep1';
import SurveyStep2 from './SurveyStep2';
import SurveyStep3 from './SurveyStep3';
import SurveyStep4 from './SurveyStep4';

const Survey = () => {

    const [step, setStep] = useState(1);
    const [form, setForm]= useState({
        name:"",
        age:"",
        addr:"",
        tel:"",
        job:"",
        email:"",
        sex:"",
        inter:""
    });

    const onForm = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    }

    const onPrev = () => {
        setStep(step-1)
    }

    const onNext = () => {
        setStep(step+1)
    }

    return (
        <div className="wrap">
            { step === 1 && <SurveyStep1 form={form} onForm={onForm} onNext={onNext}/> }
            { step === 2 && <SurveyStep2 form={form} onForm={onForm} onPrev={onPrev} onNext={onNext} /> }
            { step === 3 && <SurveyStep3 form={form} onPrev={onPrev} onNext={onNext} /> }
            { step === 4 && <SurveyStep4 {...form}/> }
            {/* 키만넘긴다 저렇게 넘기면 {...form} */}
        </div>
    );
};

export default Survey;