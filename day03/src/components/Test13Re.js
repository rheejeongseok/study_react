import React, { useRef, useState } from 'react';
import movie from '../api/movie';

const Test13Re = () => {

   const colorRef = useRef();
   const movieRef = useRef();
   const charRef = useRef();
   const [color, setColor] = useState("#489012");
   const [count, setCount] = useState(0);
   const [text, setText] = useState("");
   const [data, setData] = useState(movie);
   const [arr, setArr] = useState(data);

   const [name, setName] = useState("이정석");
   const [character, setCharacter] = useState("강인한");
   const [feature, setFeature] = useState({
      age:32,
      number:"01000000000",
      month:12,
   });

   const {age, number, month} = feature;
   

   const onColor = () => {
      setColor(text)
   }

   const onText = (e) => {
      const { value } = e.target;
      setText(value)
   }

   const onCount = (e) => {
      const { direction } = e.target.dataset;
      direction === "up" ? setCount(count => count+1) : setCount(count => count-1);
   }

   const onName = (e) => {
      const { value } = e.target
      setName(value)
   }

   const onChar = () => {
      const value = charRef.current.value
      setCharacter(value)
   }

   const onFeat = (e) => {
      const {value} = e.target
      const ip = e.target.name
      setFeature({...feature,[ip]:value})
   }

   const onMovie = () => {
      const mvData = movieRef.current.value;
      const addMv = mvData.split(",");
      const myMv = {no:addMv[0], title:addMv[1], poster:addMv[2], actor:addMv[0]}
      console.log(addMv)
      console.log(typeof arr)
      console.log(myMv)
      console.log({...data,myMv})
      // setData({...data,no:addMv[0], title:addMv[1], poster:addMv[2], actor:addMv[0]})
      // setArr({...data,no:addMv[0], title:addMv[1], poster:addMv[2], actor:addMv[0]})
      
   }

   return (
      <div>
         <ColorBox text={text} colorRef={colorRef} onColor={onColor} onText={onText} />
         <CountBox onCount={onCount} />
         <PrintBox color={color} count={count} />
         <ListBox arr={arr} onMovie={onMovie} movieRef={movieRef} />
         <Person name={name} character={character} age={age} number={number} month={month} charRef={charRef} onName={onName} onChar={onChar} onFeat={onFeat} />
      </div>
   );
};

const ColorBox = ({text, colorRef, onColor, onText}) => {
   return(
      <div>
         색상 코드 : <input type="text" value={text} onChange={onText} ref={colorRef} />
         <button onClick={onColor}>바꾸기</button>
      </div>
   )
}

const CountBox = ({onCount}) => {
   return(
      <div>
         <button onClick={onCount} data-direction="up" >증가</button>
         <button onClick={onCount} data-direction="down" >감소</button>
      </div>
   )
}

const PrintBox = ({color, count}) => {
   return(
      <div>
         <div style={{background:color, width:`${100+count}px`, height:`${100+count}px`, display:"flex", justifyContent:"center", alignItems:"center"}}>
            <span>Count : {count}</span>
         </div>
      </div>
   )
}

const ListBox = ({arr, movieRef, onMovie}) => {

   return(
      <div>
         <div>
            리스트 추가 : <input type="text" name="" id="" ref={movieRef}/>
            <button onClick={onMovie}>추가</button>
         </div>
         <ul>
            {
               arr.map((e,i) => <li key={i}>
                  <div>{e.title}</div>
               </li>)
            }
         </ul>
      </div>
   )
}

const Person = ({name, character, age, month, number, charRef, onName, onChar, onFeat}) => {

   let flower = ""
   // eslint-disable-next-line default-case
   switch(Number(month)){
      case 1 : flower = "카네이션"; break;
      case 2 : flower = "제비꽃"; break;
      case 3 : flower = "수선화"; break;
      case 4 : flower = "데이지"; break;
      case 5 : flower = "은방울 꽃"; break;
      case 6 : flower = "장미"; break;
      case 7 : flower = "수련"; break;
      case 8 : flower = "글라디올러스"; break;
      case 9 : flower = "과꽃"; break;
      case 10 : flower = "코스모스"; break;
      case 11 : flower = "국화"; break;
      case 12 : flower = "수선화"; break;
   }

   return (
      <div>
         <div>
            이름 : <input type="text" value={name} onChange={onName} />
            성격 : <select name="" id="" ref={charRef} onChange={onChar}>
               <option value="온화함">온화함</option>
               <option value="멍청함">멍청함</option>
               <option value="둔함">둔함</option>
               <option value="기민함">기민함</option>
            </select>
            나이 : <input type="text" value={age} name="age" onChange={onFeat} />
            번호 : <input type="text" value={number} name="number" onChange={onFeat} />
            태어난달 : <select name="month" id="" onChange={onFeat}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
               <option value="11">11</option>
               <option value="12">12</option>
            </select>
         </div>
         <div>
            이름은 {name}이고 성격은 {character},
            <PersonInfo age={age} number={number} month={month} flower={flower}/>
         </div>
      </div>
   )

}

const PersonInfo = ({age, number, month, flower}) => {
   return (
      <div>
         나이는 {age}, 번호는 {number}, {month}월생으로 탄생화는 {flower}
      </div>
   )
}

export default Test13Re;