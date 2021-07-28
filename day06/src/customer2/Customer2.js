import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import ListUser2 from './ListUser2';
import AddUser2 from './AddUser2';
import EditUser2 from './EditUser2';


const userData = [
   {id:1, name:'람머스', jobs:'구른다', ult:'점프', img:'https://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Rammus_Square_0_1_1.jpg?v=20201112b'},
   {id:2, name:'다리우스', jobs:'덩크왕', ult:'덩크', img:'https://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Darius_Square_0_1_1.jpg?v=20201112b'},
   {id:3, name:'가렌', jobs:'내검과심장', ult:'내려찍기', img:'https://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Garen_Square_0_2.jpg?v=20201112b'},
   {id:4, name:'럭스', jobs:'빛망치', ult:'섬광발싸', img:'https://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/champions/Lux_Square_0_1.jpg?v=20201112b'},
];

const Customer2 = () => {

   const [data, setData] = useState(userData);
   const [mData, setMdata] = useState({});
   const lenRef = useRef(data.length);
   const [open, setOpen] = useState(false);
   const [flag, setFlag] = useState(false);
   
   const addUser = (c) => {
      c.id = ++lenRef.current;
      setData([...data,c])
   }

   const onRemove = (id) => {
      setData(data.filter(e => e.id !== id))
      if(flag) setFlag(!flag)
   }

   const onPick = (id) => {
      setMdata(data.find(e => e.id === id))
      setFlag(true);
   }

   const onMod = (item) => {
      setData(data.map(e => {
         if(e.id === item.id)return item
         else return e
      }))
      setFlag(false)
   }

   return (
      <div>
         {
            !flag && <AddUser2 users={data} addUser={addUser} open={open} setOpen={setOpen} />
         }
         {
            flag && <EditUser2 mData={mData} setMdata={setMdata} open={open} setOpen={setOpen} setFlag={setFlag} onMod={onMod} />
         }
         
         <ListUser2 data={data} onRemove={onRemove} onPick={onPick} />
      </div>
   );
};

export default Customer2;