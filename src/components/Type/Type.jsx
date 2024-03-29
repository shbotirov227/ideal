import React from 'react';
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/icons";

import "./Type.scss";

const Type = ({ url, title, img }) => {
	return (
		<Link to={url} className="Type">
			<img className="Type-img" src={img} alt="img" />
			<div className="Type-info">
				<h4 className="Type-title">{title}</h4>
				<ArrowIcon />
			</div>
		</Link>
	);
}

export default Type;