import React, { useEffect, useState } from 'react';
import Parts from './Parts';
import Highlighter from "react-highlight-words";
import './style.scss';
import '../utils/css/reset.css';

const Test9 = () => {
   const [part, setPart] = useState(Parts)
   const [fdata, setFdata] = useState([])
   const [text, setText] = useState('');
   const onText = (e) => {
      const { value } = e.target;
      setText(value)
   }
   const reg = text.split(/\s/).filter(word => word);
   const [con, setCon] = useState({})
   const [show, setShow] = useState(false)

   useEffect(() => {
      const a = part.filter(e => e.label.indexOf(text) !== -1);
      setFdata(a)
   },[text])


   const showPart = (e) => {
      setCon(e)
      setShow(true)
      setText('')
   }

   return (
      <div className="searchWrap">
         <input type="text" onChange={onText} style={{width:'100%'}} className="search" placeholder="부품 검색" />
         {
            text.length > 0 && <ul className="list">
               {/* {fdata.map((e,i) => <li key={i} dangerouslySetInnerHTML={{__html:e.label}} style={{marginBottom:'10px',paddingBottom:'10px',borderBottom:'1px solid grey',cursor:'pointer'}}></li>)} */}
               {
                  fdata.map((e,i) => <li className="listItem" key={i} onClick={() => showPart(e)}>
                     <span>
                        <Highlighter highlightClassName="hi" searchWords={reg} textToHighlight={e.label} highlightStyle={{color:'white',background:'black',padding:'0 5px'}} />
                     </span>
                     <span>
                        {
                           e.value === 1 && <img src="./images/list_gpb.png" alt="" />
                        }
                        {
                           e.value === 2 && <img src="./images/list_gb.png" alt="" />
                        }
                        {
                           e.value === 3 && <img src="./images/list_gp.png" alt="" />
                        }
                        {
                           e.value === 4 && <img src="./images/list_g.png" alt="" />
                        }
                        {
                           e.value === 5 && <img src="./images/list_call.png" alt="" />
                        }
                     </span>
                     
                  </li>)
               }
            </ul>
         }
         {
            show && 
            <div className="parts">
               <div className="images">
               {
                  con.value === 1 && <img src="./images/avail_gpb.png" alt="" />
               }
               {
                  con.value === 2 && <img src="./images/avail_gb.png" alt="" />
               }
               {
                  con.value === 3 && <img src="./images/avail_gp.png" alt="" />
               }
               {
                  con.value === 4 && <img src="./images/avail_g.png" alt="" />
               }
               {
                  con.value === 5 && <img src="./images/avail_call.png" alt="" />
               }
               </div>
               <div className="tit">부품명 : {con.label}</div>
               
            </div>
         }
         
      </div>
   );
};

export default Test9;