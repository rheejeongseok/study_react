import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from '../../common/Footer';
import AboutIntro from './AboutIntro';
import AboutInfo from './AboutInfo';
import AboutHistory from './AboutHistory';
import { useDispatch, useSelector } from 'react-redux';
import { changeHeader } from '../../../store/module/about';
import AboutMap from './AboutMap';

const About = () => {

	const dispatch = useDispatch();

   return (
      <ReactFullpage 
            licenseKey={'BA19F3F1-24B44EAC-AFEC6BCF-1FDF41B6'}
						scrollHorizontally={true}
            scrollHorizontallyKey={'YXV0b2hhbmRzLmNvLmtyX250YmMyTnliMnhzU0c5eWFYcHZiblJoYkd4NWhJZA=='}
						
						onLeave ={(start,end,direction) => {
							console.log(`start = ${start.index} , end = ${end.index} dir = ${direction}`)
							if((start.index === 0 && direction === 'down') || (end.index === 0 && direction === 'up')) dispatch(changeHeader('type01'))
							else dispatch(changeHeader('type02'))
						}}
						onSlideLeave = {(section,start,end,direction) => {
							console.log(`section = ${section} , start = ${start} , end = ${end} , dir = ${direction}`)
						}}
            render={({state, fullpageApi}) => {
               return(
                  <ReactFullpage.Wrapper>
                     <AboutIntro />
										 <AboutInfo />
										 <AboutHistory />
										 <AboutMap />
                     <Footer/>
                  </ReactFullpage.Wrapper>
               )
            }}
         />
   );
};

export default About;