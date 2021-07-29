import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from '../../common/Footer';
import AboutIntro from './AboutIntro';
import AboutInfo from './AboutInfo';

const About = () => {
   return (
      <ReactFullpage 
            licenseKey={'BA19F3F1-24B44EAC-AFEC6BCF-1FDF41B6'}
						scrollHorizontally={true}
            scrollHorizontallyKey={'YXV0b2hhbmRzLmNvLmtyX250YmMyTnliMnhzU0c5eWFYcHZiblJoYkd4NWhJZA=='}
						onLeave={() => {
							console.log("aaa")
						}}
            render={({state, fullpageApi}) => {
               return(
                  <ReactFullpage.Wrapper>
                     <AboutIntro />
										 <AboutInfo />
                     <Footer/>
                  </ReactFullpage.Wrapper>
               )
            }}
         />
   );
};

export default About;