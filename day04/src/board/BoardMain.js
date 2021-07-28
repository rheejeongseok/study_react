import React, { useRef, useState } from 'react';
import users from '../utils/api/userList';
import boards from '../utils/api/boardList';
import singers from '../utils/api/singer';
import music from '../utils/api/music';
import boardText from '../utils/api/boardText';
import BoardUserList from './user/BoardUserList';
import BoardJoin from './join/BoardJoin';
import BoardList from './text/BoardList';
import BoardCon from './text/BoardCon';
import MusicList from './music/MusicList';
import '../utils/scss/common.scss';

const BoardMain = () => {

   const [userList, setUserList] = useState(users);
   const [boardList, setBoardList] = useState(boards);
   const userNo = useRef(userList.length);
   const boardNo = useRef(boardList.length);
   const [findCon, setFindCon] = useState({});
   const [state, setState] = useState(1);
   const [step, setStep] = useState(1);
   const [bCount, setBCount] = useState(1);
   const [boardState,setBoardState] = useState(1);
   const [userForm, setUserForm] = useState({
      no:++userNo.current,
      name:"",
      age:"",
      addr:"",
      hobby:"",
      tel:"",
      email:"",
      phone:"",
      singer:"",
   })
   const [writeBoard, setWriteBoard] = useState({
      no:++boardNo.current,
      title:"",
      con:"",
      click:0,
      date:"",
      writer:"",
   })

   const pageSet = (num) => {
      setState(num)
   }

   const onForm = (e) => {
      const {value, name} = e.target;
      setUserForm({
         ...userForm,[name]:value
      })
   }

   const onPage = (text) => {
      if(text === 'prev') setStep(step - 1)
      else setStep(step + 1)
   }

   const onJoin = () => {
      setStep(1)
      setState(1)
      setUserList([
         ...userList,userForm
      ])
      setUserForm({
         no:++userNo.current,
         name:"",
         age:"",
         addr:"",
         hobby:"",
         tel:"",
         email:"",
         phone:"",
         singer:"",
      })
      console.log(userList)
   }

   const showCon = (num) => {
      pageSet(4)
      setBCount(num);
      setFindCon(
         boardList.find(e => e.no === num)
      )
   }

   const chnWrite = () => {
      setBoardState(2)
   }

   const onWriteBoard = (e, newDt) => {
      const {name, value} = e.target;
      setWriteBoard({
         ...writeBoard,[name]:value,date:newDt
      })
   }

   const comWrite = (date) => {

      setBoardList([
         ...boardList,writeBoard
      ])
      setBoardState(1)
   }

   const [s, setS] = useState(singers);
   const [m, setM] = useState(music);
   const [mNum, setMnum] = useState(1);
   const [sNum, setSnum] = useState(0);
   
   const showMusic = (num) => {
      setSnum(num)
      setMnum(2)
   }

   const showList = () => {
      setSnum(0);
      setMnum(1);
   }

   console.log(s, m)

   return (
      <div>
         <div className="btns">
            <button onClick={() => pageSet(1)}>회원 리스트</button>
            <button onClick={() => pageSet(2)}>회원 가입</button>
            <button onClick={() => pageSet(3)}>게시판</button>
            <button onClick={() => pageSet(5)}>음악리스트</button>
         </div>
         <hr />
         {state === 1 && <div><BoardUserList userList={userList} /> <hr /></div>}
         {state === 2 && <div><BoardJoin userForm={userForm} step={step} onForm={onForm} onPage={onPage} onJoin={onJoin} /><hr /></div>}
         {state === 3 && <div><BoardList boardList={boardList} showCon={showCon} chnWrite={chnWrite} boardState={boardState} onWriteBoard={onWriteBoard} writeBoard={writeBoard} comWrite={comWrite} /></div>}
         {state === 4 && <div><BoardCon findCon={findCon} pageSet={pageSet} /></div>}
         {state === 5 && <div><MusicList singer={s} music={m} mNum={mNum} sNum={sNum} showMusic={showMusic} showList={showList} /></div>}
      </div>
   );
};

export default BoardMain;