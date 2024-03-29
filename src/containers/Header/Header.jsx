import React from 'react';
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import "./Header.scss";

const Header = () => {
	return (
		<div className="Header">
			{/* <div className="Header-inner"> */}
				<Link to="/"><img className="logo" src={Logo} alt="logo" /></Link>
				
				<div className="Header-links">
					<Link className="Header-link outlined" to="/">Шторы Ideal</Link>
					<Link className="Header-link" to="/">Где купить?</Link>
					<Link className="Header-link" to="/">Дилерам</Link>
					<Link className="Header-link" to="/">Дизайн студиям</Link>
					<Link className="Header-link" to="/">Контакты</Link>
				</div>
			{/* </div> */}
		</div>
	);	
}

export default Header;