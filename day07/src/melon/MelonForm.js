import React, { useEffect, useState } from 'react';
import './MelonForm.css'

const MelonForm = ({onSearch}) => {

    const [text, setText] = useState('');

    const onText = (e) => {
        const {value} = e.target;
        setText(value)
    }

    useEffect(() => {
        onSearch(text)
    }, [text])

    const onSubmit = (e) => {
        e.preventDefault();
        // onSearch(text)
    }

    return (
        <form className="MelonForm" onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onText} />
        </form>
    );
};

export default MelonForm;