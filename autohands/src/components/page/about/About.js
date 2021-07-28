import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from '../../common/Footer';
import AboutIntro from './AboutIntro';

const About = () => {
   return (
      <ReactFullpage 
            licenseKey={'BA19F3F1-24B44EAC-AFEC6BCF-1FDF41B6'}
            
            render={({state, fullpageApi}) => {
               return(
                  <ReactFullpage.Wrapper>
                     <AboutIntro />
                     <Footer/>
                  </ReactFullpage.Wrapper>
               )
            }}
         />
   );
};

export default About;