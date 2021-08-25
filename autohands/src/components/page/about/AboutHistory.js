import React from 'react';
import '../../../utils/css/about.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import his21Img from '../../../images/about/his21_img.png';

import SwiperCore, {EffectCoverflow, Navigation, Pagination} from 'swiper/core';
import { useSelector } from 'react-redux';
SwiperCore.use({EffectCoverflow, Navigation, Pagination});

const AboutHistory = () => {

	const data = useSelector(state => state.about.year_list)
	const length = Math.floor(data.length/2)+1;
	
	
	return (
		<div className="aHistory section">
			<div className="historyWrap">
				<Swiper 
				navigation={true} 
				slidesPerView={2}
				slidesPerGroup={2}
				spaceBetween={30}
				onInit = {() => {
					const barW = document.querySelector('.bar').clientWidth;
					const barInn = document.querySelector('.barInn');
					const car = document.querySelector('.car');
					barInn.style.width = `${barW/length}px`;
					car.style.left = `${barW/length}px`;
				}}
				onSlideChangeTransitionStart = {() => {
					document.querySelectorAll('.tire').forEach((e) => {
						e.classList.add('active');
					});
				}}
				onSlideChange = {(e) => {
					const barW = document.querySelector('.bar').clientWidth;
					const barInn = document.querySelector('.barInn');
					const car = document.querySelector('.car');
					if(e.activeIndex === 0) {
						barInn.style.width = `${barW/length*1}px`;
						car.style.left = `${barW/length*1}px`;
					}else {
						barInn.style.width = `${barW/length*Math.ceil((e.activeIndex/2)+1)}px`;
						car.style.left = `${barW/length*Math.ceil((e.activeIndex/2)+1)}px`;
					} 
				}}
				onSlideChangeTransitionEnd = {() => {
					document.querySelectorAll('.tire').forEach((e) => {
						e.classList.remove('active');
					});
				}}

				className="swiper">
				{
					data.map((e,i) => {
						return <>
							<SwiperSlide className="historyItem" key={i} data-index={i}>
								<div className="historyImg">
									<img src={e.img} alt="" />
								</div>
								<div className="historyList">
									<h3>{e.year}</h3>
									<ul>
										{
											e.list.map(text => {
												return <li>
													<span className="num">{text.month}</span>
													<span className="txt">{text.text}</span>
												</li>
											})
										}
									</ul>
								</div>
							</SwiperSlide>
						</>
					})
				}
				</Swiper>
				<div className="progress">
					<div className="car_wrap">
						<i className="car">
							<span className="tire tire01"></span>
							<span className="tire tire02"></span>
						</i>
					</div>
					<div className="bar">
						<i className="barInn"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutHistory;