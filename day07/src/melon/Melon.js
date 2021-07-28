import React, { useState } from 'react';
import '../utils/css/reset.css';
import './Melon.css';
import data from '../utils/api/music';
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import Modal from './Modal';

const Melon = () => {

    const [musics,setMusics] = useState(data);
    // const [find, setFind] = useState(musics[0])
    const [find, setFind] = useState({})
    const [active, setActive] = useState(false)


    const getDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth()+1;
        const day = date.getDate();
        const msg = `${year}. ${month}. ${day}`
        return msg
    }

    const onOpen = (id) => {
        setActive(true)
        setFind(musics.find(e => e.id === id))
    }

    const onClose = () => {
        setActive(false)
    }

    const onSearch = (text) => {
        // setMusics(data.filter(e => e.title.indexOf(text) !== -1 || e.singer.indexOf(text) !== -1))
        setMusics(data.filter(e => {
            const re = new RegExp(text, 'ig');
            return e.title.match(re) || e.singer.match(re)
        }))
    }

    const onLike = (num) => {
        /* setMusics(musics.map(e => e.id === num? {
            ...e, like:e.like+1, done:!e.done
        } : e)) */

        /* setMusics(musics.map(e => {
            if(e.id === num) {
                if(!e.done) return {...e, like:e.like+1, done:!e.done}
                else return {...e, like:e.like-1, done:!e.done}
            }else return e
        })) */

        setMusics(musics.map(e => e.id === num ? !e.done ? {...e, like:e.like+1, done:!e.done} : {...e, like:e.like-1, done:!e.done} : e))
    }

    return (
        <div className="Melon">
            <h2>인기차트 {getDate()}</h2>
            <MelonForm onSearch={onSearch} />
            <MelonList musics={musics} onLike={onLike} onOpen={onOpen} />
            {active && <Modal onClose={onClose} find={find} />}
        </div>
    );
};

export default Melon;