import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../../../utils/css/about.css';
import video1 from '../../../images/about/floor7.mp4';
import video2 from '../../../images/about/autoinside_app.mp4';
import video3 from '../../../images/about/floor8.mp4';
import video4 from '../../../images/about/coffee&doughnut.mp4';
import video5 from '../../../images/about/_ceo.mp4';
import video6 from '../../../images/about/_clock.mp4';


const video_list = [video1,video2,video3,video4,video5,video6]

const AboutIntro = () => {

	const [list, setList] = useState(video_list);
	const [random,setRandom] = useState(Math.floor(Math.random() * list.length));
	const [video, setVideo] = useState(list[0]);

	useEffect(() => {
		
		const getVideo = () => {
			setVideo(list[random])
			setRandom(Math.floor(Math.random() * list.length))
		}

		const movieSrc = document.querySelector('#movieSrc')

		movieSrc.addEventListener('ended',() => {
			return console.log("aaa")
		})

	},[])


	return (
		<div className="section">
				<div className="movie">
					<video id="movieWrap" autoPlay muted>
							<source id="movieSrc" src={video}/>
					</video>
				</div>
				<div className="mainCopy">
					<h1 className="mainTxt">
						<div>자동차의 가치와 신뢰를</div>
						<div>창출하는 기업 (주)오토핸즈입니다.</div>
					</h1>
				</div>
				<div className="mouse">
					<div className="shape"></div>
					<span>Scroll</span>
				</div>
		</div>
	);
};

export default React.memo(AboutIntro);