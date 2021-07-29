import React from 'react';
import { Link } from 'react-router-dom'
import img_set from '../../'

const Header = () => {
   return (
      <div className="header">
         <div className="headerInner">
            <div className="logo"></div>
            <ul>
               <li><Link to="/about">AutoHands</Link></li>
               <li><Link to="/business">Business</Link></li>
               <li><Link to="/news">News&</Link></li>
               <li><Link to="/people">People</Link></li>
            </ul>
						<a href="javascript:;" className="menu">
							<span className="line"></span>
							<span className="line"></span>
							<span className="line"></span>
						</a>
         </div>
      </div>
   );
};

export default Header;