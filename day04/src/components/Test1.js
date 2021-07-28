import React, { useState } from 'react';

const Test1 = () => {

    const [form, setForm] =useState({
        name:"aa",
        age:30
    });

    const {name, age} = form;

    const onForm = (e) => {
        const {value, name} = e.target;
        setForm({...form, [name]:value})
    }

    return (
        <div>
            <p>이름 : <input type="text" name="name" value={name} onChange={onForm} /></p>
            <p>나이 : <input type="text" name="age" value={age} onChange={onForm} /></p>
        </div>
    );
};

export default Test1;