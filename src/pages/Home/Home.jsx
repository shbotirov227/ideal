import React from 'react';
import Header from "../../containers/Header/Header";
import Type from "../../components/Type/Type";

import TypeImage1 from "../../assets/images/typeImage1.png"
import TypeImage2 from "../../assets/images/typeImage2.png"
import TypeImage3 from "../../assets/images/typeImage3.png"
import TypeImage4 from "../../assets/images/typeImage4.png"
import TypeImage5 from "../../assets/images/typeImage5.png"

import "./Home.scss";
import Services from "../../containers/Services/Services";

const Home = () => {

	const typeData = [
		{
			id: 0,
			title: "австрийские шторы",
			img: TypeImage1,
			url: "austrian"
		},

		{
			id: 1,
			title: "лондонские шторы",
			img: TypeImage2,
			url: "british"
		},

		{
			id: 2,
			title: "римские шторы",
			img: TypeImage3,
			url: "roman"
		},

		{
			id: 3,
			title: "французские шторы",
			img: TypeImage4,
			url: "french"
		},

		{
			id: 3,
			title: "прямые шторы",
			img: TypeImage5,
			url: "straight"
		}
	]


	return (
		<div className="Home container">
			<Header />

			<div className="heroSection">

				<div className="heroSection-left">
					<h3 className="main-title">ИНДВИДУАЛЬНОЕ ИЗГОТОВЛЕНИЕ ШТОР</h3>
					<p className="Home-text">8 видов систем, более 1000 видов тканей, и множество дополнительных возможностей позволяют создать реально уникальную и уютную атмосферу в вашем доме</p>

					<div className="heroSection-types">
						{typeData.map(el => <Type key={el.id} url={`/${el.url}`} title={el.title} img={el.img} />)}
					</div>
				</div>
			</div>

			<Services />

		</div>
	);
}

export default Home;