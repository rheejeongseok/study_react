import React from 'react';
import PropTypes from 'prop-types';

const Test02SubRe = ({name, age, gId, addr, tel, sex, color}) => {

   return (
      <div>
         <span>{name}</span>
         <span>{age}</span>
         <span>{gId}</span>
         <span>{addr}</span>
         <span>{tel}</span>
         <span>{sex}</span>
         <span>{color}</span>
      </div>
   );
};

Test02SubRe.propTypes = {
   name : PropTypes.string,
   age : PropTypes.number,
   gId : PropTypes.string,
   addr : PropTypes.string,
   tel : PropTypes.string,
   sex : PropTypes.string,
   color : PropTypes.string,
}

Test02SubRe.defaultProps = {
   name : "name string",
   age : 1,
   gId : "gId string",
   addr : "addr string",
   tel : "tel string",
   sex : "sex string",
   color : "color string",
}


export default Test02SubRe;