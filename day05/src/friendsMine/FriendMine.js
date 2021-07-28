import React, { useRef, useState } from 'react';
import FriendInputMine from './FriendInputMine';
import FriendListMine from './FriendListMine';
import friend from '../utils/api/friend';
import '../utils/css/reset.css';
import './style.css';

const FriendMin = () => {

   const [initList, setInitList] = useState(friend);
   const [list, setList] = useState(initList);
   const listRef = useRef(list.length+1);
   const [count,setCount] = useState(list.length)
   const [show,setShow] = useState(true)

   const [one, setOne] = useState({
      id:listRef.current,
      name:"",
      age:0,
      image:""
   })

   const onDel = () => {
      setList([])
      setCount(0)
   }

   const onLoad = () => {
      setList(initList)
      setCount(initList.length)
   }

   const onChn = (e) => {
      const {name, value} = e.target;
      const { length } = e.target.value;
      setOne(
         {...one,[name]:value}
      )

      length>4 ? e.target.classList.add("aa") : e.target.classList.remove("aa")
      
   }

   const onAdd = (e) => {
      e.preventDefault();
      setOne({...one, id:++listRef.current})
      setList([...list,one])
      setCount(list.length+1)
   }

   const listDel = (num) => {
      setList(list.filter(e => e.id !== num))
   }

   return (
      <div className="Friend">
         <h1>친구들 총인원 : {count}</h1>
         <span className="chk">
            {/* <input type="checkbox" id="chk01" onChange={() => setShow(!show)} /> */}
            <input type="checkbox" id="chk01" checked={show} onChange={(e) => setShow(e.target.checked)} />
            <label htmlFor="chk01">추가 {!show ? "활성" : "비활성"}</label>
         </span>
         <FriendListMine list={list} onDel={onDel} onLoad={onLoad} listDel={listDel} />
         {
            show && <FriendInputMine one={one} onChn={onChn} onAdd={onAdd} />
         }
      </div>
   );
};

export default FriendMin;