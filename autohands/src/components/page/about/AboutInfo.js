import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../../../utils/css/about.css';

const AboutInfo = () => {

	return (
		<div className="section">
			<div className="aboutInfo">
				<div className="aboutTxt">
					<h3>
						자동차 산업의 새로운 패러다임을
						<br />
						선도하는 기업<span>(주)오토핸즈</span>입니다.
					</h3>
					<p>중고차 포털 '오토인사이드' 온라인 사업과 현대캐피탈 임대차량 위탁관리,<br />자동차 보증연장(EW), 기아자동차 신차케어 서비스 TPA 운영, <br />현대자동차 가격보장 서비스, 중고차 내차팔기 등 오토핸즈는 신차를 만나는 시점부터<br />차량을 판매하는 순간까지 자동차생활 전 영역에서 함께 합니다.</p>
				</div>
				<div class="aboutCp">
					<ul class="infoTxt">
						<li><span class="infoTit">법인명</span><span>주식회사 오토핸즈</span></li>
						<li><span class="infoTit">대표자</span><span>강귀호</span></li>
						<li><span class="infoTit">설립일</span><span>2013년 08월</span></li>
						<li><span class="infoTit">조직구성</span><span>모빌리티플랫폼본부, 모빌리티서비스본부, 경영지원팀, IT팀, 컴플라이언스팀</span></li>
						<li>
							<span class="infoTit">주요사업</span>
							<span class="doto">
								<div>오토인사이드 중고차 경쟁입찰 시스템</div>
								<div>현대차 중고차 가격보장 서비스, 어드벤티지 PGM 운영</div>
								<div>기아차 중고차 가격보장 서비스, K-스타일케어 운영</div>
								<div>현대캐피탈 인증중고차 운영, 리스/렌터카 사후관리</div>
							</span>
						</li>
					</ul>
					<ul class="infoBlue">
						<li>
							<img src="/images/info_icon01.png" alt="" class="ver_pc" />
							<img src="/images/mobile/info_icon01.png" alt="" class="ver_mb" />
							<h3><span>446</span>억</h3>
							<p>매출액</p>
						</li>
						<li>
							<img src="/images/info_icon02.png" alt="" class="ver_pc" />
							<img src="/images/mobile/info_icon02.png" alt="" class="ver_mb" />
							<h3><span>95</span>명</h3>
							<p>임직원 수</p>
						</li>
					</ul>
					<div className={`testBox`}></div>
				</div>
			</div>
		</div>
	);
};

export default AboutInfo;