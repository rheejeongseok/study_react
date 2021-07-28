import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from '../../common/Footer';

const News = () => {
   return (
      <ReactFullpage 
            licenseKey={'BA19F3F1-24B44EAC-AFEC6BCF-1FDF41B6'}
            
            render={({state, fullpageApi}) => {
               return(
                  <ReactFullpage.Wrapper>
                     <div className="section">
                        newss
                     </div>
                     <Footer/>
                  </ReactFullpage.Wrapper>
               )
            }}
         />
   );
};

export default News;