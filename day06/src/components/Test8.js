import React, { useState } from 'react';
//  src폴더 안에 이미지처리는
import img1 from '../utils/images/img1.jpg';
import img2 from '../utils/images/img2.jpg';
//  js에 배열로 들어가있는 이미지 처리
import image from '../utils/api/image';


const Test8 = () => {

   const [img, setImg] = useState(image)

   return (
      <div>
         {/*  src 폴더 안에 이미지 처리*/}
         <p>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
         </p>
         {/*  public 폴더 안에 이미지 처리*/}
         <p>
            <img src="./images/m0.jpg" alt="" />
            <img src="./images/m1.jpg" alt="" />
         </p>
         <p>
            <img src={img[0].img} alt="" />
            <img src={img[1].img} alt="" />
         </p>
      </div>
   );
};

export default Test8;