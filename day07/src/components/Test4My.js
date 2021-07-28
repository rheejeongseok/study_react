import React from 'react';
import './Test4.css';
import style from './Test4.module.css';

const Test4My = () => {
   return (
      <div className="wrap">
         <div className="box">test.css</div>
         <div className={style.box}>module.css</div>

         <div className="size bg">test.css</div>
         <div className={`${style.size} ${style.bg}`}>module</div>
         <div className={`size ${style.bg}`}>mixed</div>

         <div className={[style.size, style.bg].join(' ')}></div>
         <div className={['size', style.bg].join(' ')}></div>

         <div className="mybox">aa</div>
      </div>
   );
};

export default Test4My;