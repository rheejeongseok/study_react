import React from 'react';
import MusicInfo from './MusicInfo';
import MusicItem from './MusicItem';

const MusicList = ({singer,music,mNum,sNum,showMusic,showList}) => {
   return (
      <>
         {
            mNum === 1 && singer.map(e => <MusicItem key={e.id} data={e} showMusic={showMusic} />)
         }
         {
            mNum === 2 && <MusicInfo music={music} singers={singer} sNum={sNum} showList={showList}/>
         }
      </>
   );
};

export default MusicList;