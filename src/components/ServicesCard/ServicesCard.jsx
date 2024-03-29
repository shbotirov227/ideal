import React from 'react';

import "./ServicesCard.scss";

const ServicesCard = ({ title, icon }) => {
	return (
		<div className="ServicesCard">
			{/* <div className="ServicesCard-item"/> */}
				{/* <img className="ServicesCard-item-img" src={icon} alt="" /> */}
				{icon}
				<h4 className="ServicesCard-item-title">{title}</h4>
			{/* </div> */}
		</div>
	);
}

export default ServicesCard;