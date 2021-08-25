import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../../../utils/css/about.css';

const AboutMap = () => {

	const mapData = useSelector(state => state.about.about_map);

	useEffect(() => {
		/* kakao.maps.load(() => {
			const container = document.querySelector('#map');
			const options = {
				center:new kakao.maps.Map.LatLng(37.529202, 126.920775),
				level:3
			}
			const map = new kakao.maps.Map(container,options);
		}) */
	}, [])

	
   return (
      <div className="aMap section">
				<div className="mapBox">
					<ul className="tabMenu">
						{
							mapData.map((e,i) => 
								<li class="tabDepth01" key={i}>
									<a href={`#tab0${e.locate_depth01_id}`} map-id={e.locate_depth01_id} map-lat={e.locate_depth01_lat} map-lng={e.locate_depth01_lng} >{e.locate_name}</a>
									{
										e.locate_depth02 !== "" &&
										<ul className="tabDepth02">
											{
												e.locate_depth02.map(depth02 => 
													<li>
														<a href={`#tab0${depth02.locate_depth02_id}`} map-id={depth02.locate_depth02_id} map-lat={depth02.locate_depth02_lat} map-lng={depth02.locate_depth02_lng} >{depth02.locate_name}</a>
													</li>
												)
											}
										</ul>
									}
								</li>
							)
						}
					</ul>
					<div className="mapWrap">
						<div className="mapTxt"></div>
						<div className="map" id="map"></div>
					</div>
				</div>
      </div>
   );
};

export default AboutMap;