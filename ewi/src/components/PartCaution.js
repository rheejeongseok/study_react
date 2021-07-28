import React from 'react';
import { useSelector } from 'react-redux';

const PartCaution = () => {
   console.log("partcaution")
   const fData = useSelector(state => state.ewi.fData)
   
   return (
      <div className="expWrap">
         {
            fData['value'] !== undefined && 
            <>
               <div className="exp">※'통상적인 마모/소모' 및 '외부의 충격'에 의한 고장은 보상하지 않습니다.</div>
               <div className="exp box">위 검색결과는 보상진행 과정에 따라 달라질 수 있으므로, 정확한 보상결과는 보험사의 심사담당자를 통해 확인하여 주시기 바랍니다.</div>
            </>
         }
      </div>
   );
};

export default React.memo(PartCaution);